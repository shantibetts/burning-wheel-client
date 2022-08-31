import axios from 'axios'
import apiUrl from '../apiUrl'

// *** Helper Functions ***

// Creates form data for DTA Tables
const createEmptyTableData = () => {
	return {
		name: '',
		shade: '',
		exponent: '',
		tax: '',
		routine: '',
		difficult: '',
		challenging: '',
		fate: '',
		persona: '',
		deeds: '',
		root1: '',
		root2: '',
		description: '',
		callOn: '',
		action: '',
		isActive: true
	}
}

// Changes string to camel case, credit to Christian C. Salvadó
// from https://stackoverflow.com/questions/2970525/converting-any-string-into-camel-case
function camelize(str) {
	return str
		.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
			return index === 0 ? word.toLowerCase() : word.toUpperCase()
		})
		.replace(/\s+/g, '')
}

// *** CRUD Functions ****

// Update a character with whatever is in updateBody
const handleCharacterUpdate = (
	setUserData,
	userData,
	characterId,
	updateBody
) => {
	// find index of character to be updated
	const i = userData.characters.findIndex(
		(character) => character._id === characterId
	)
	axios
		.patch(apiUrl + `/characters/` + characterId, {
			withCredentials: true,
			updateBody
		})
		// fetch(apiUrl + `/characters/` + id, {
		// 	method: 'PATCH',
		// 	headers: { 'Content-Type': 'application/json' },
		// 	body: JSON.stringify(updateBody)
		// })
		// 	.then((res) => res.json())
		.then((data) => {
			console.log(data)
			let updatedUser = { ...userData }
			updatedUser.characters.splice(i, 1, data.character)
			setUserData(updatedUser)
		})
		.catch((err) => {
			console.log('something went wrong', err)
		})
}

// Update a character with whatever is in updateBody
const handleAttributeUpdate = (
	setUserData,
	userData,
	characterId,
	attribute,
	updateBody,
	handleToggle,
	dialogType
) => {
	// find index of character to be updated
	const i = userData.characters.findIndex(
		(character) => character._id === characterId
	)
	// Copy array for attribute to modify
	const attributeArray = userData.characters[i][attribute].slice()
	// Find index inside attribute array to modify
	const attributeIndex = attributeArray.findIndex(
		(attribute) => attribute.name === updateBody.name
	)
	if (dialogType === 'edit') {
		// Edit: replace old with update
		attributeArray.splice(attributeIndex, 1, updateBody)
	} else if (dialogType === 'delete') {
		// Delete: delete object at that index
		attributeArray.splice(attributeIndex, 1)
	} else {
		// Add: add to end of list
		attributeArray.push(updateBody)
	}
	// create object to make update request
	const update = { [attribute]: attributeArray }

	axios
		.patch(apiUrl + `/characters/` + characterId, {
			withCredentials: true,
			updateBody: update
		})
		// fetch(apiUrl + `/characters/` + characterId, {
		// 	method: 'PATCH',
		// 	headers: { 'Content-Type': 'application/json' },
		// 	body: JSON.stringify(update)
		// })
		// 	.then((res) => res.json())
		.then((data) => {
			console.log(data)
			let updatedUser = { ...userData }
			updatedUser.characters.splice(i, 1, data.data.character)
			setUserData(updatedUser)
			handleToggle()
		})
		.catch((err) => {
			console.log('something went wrong', err)
		})
}

// *** Table Functions ****

// This function sorts the table
function descendingComparator(a, b, orderBy) {
	if (b[orderBy] < a[orderBy]) {
		return -1
	}
	if (b[orderBy] > a[orderBy]) {
		return 1
	}
	return 0
}

// This function sets how the sort function above sorts (ascending or descending)
function getComparator(order, orderBy) {
	return order === 'desc'
		? (a, b) => descendingComparator(a, b, orderBy)
		: (a, b) => -descendingComparator(a, b, orderBy)
}

// This function handles the sort order
const handleRequestSort = (
	event,
	property,
	order,
	orderBy,
	setOrder,
	setOrderBy
) => {
	const isAsc = orderBy === property && order === 'asc'
	setOrder(isAsc ? 'desc' : 'asc')
	setOrderBy(property)
}

// Changes which page of the table is being displayed
const handleChangePage = (event, newPage, setPage) => {
	setPage(newPage)
}

// Changes number of rows displayed per page
const handleChangeRowsPerPage = (event, setRowsPerPage, setPage) => {
	setRowsPerPage(parseInt(event.target.value, 10))
	setPage(0)
}

export {
	camelize,
	createEmptyTableData,
	getComparator,
	handleRequestSort,
	handleChangePage,
	handleChangeRowsPerPage
}
