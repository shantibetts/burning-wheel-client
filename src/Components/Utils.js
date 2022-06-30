import apiUrl from '../apiUrl'

// *** CRUD Functions ****

// Functions to GET user with characters from database
const fetchUser = (setUserData, userName, navigate) => {
	fetch(apiUrl + `/users/username/` + userName)
		.then((res) => res.json())
		.then((data) => {
			setUserData(data.user)
			console.log(data.user)
			navigate(`/user/${userName}`, { replace: true })
			return ''
		})
		.catch((err) => {
			console.log('something went wrong', err)
			return 'something went wrong' + err
		})
}

// Update a character with whatever is in updateBody
const handleCharacterUpdate = (setUserData, userData, id, updateBody) => {
	// find index of character to be updated
	const i = userData.characters.findIndex((character) => character._id === id)
	fetch(apiUrl + `/characters/` + id, {
		method: 'PATCH',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(updateBody)
	})
		.then((res) => res.json())
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
	handleToggle
) => {
	// find index of character to be updated
	const i = userData.characters.findIndex(
		(character) => character._id === characterId
	)
	// create object to make update request
	const attributeArray = userData.characters[i][attribute].slice()
	const attributeIndex = attributeArray.findIndex(
		(each) => each.name === updateBody.name
	)
	attributeArray.splice(attributeIndex, 1, updateBody)
	const update = { [attribute]: attributeArray }

	fetch(apiUrl + `/characters/` + characterId, {
		method: 'PATCH',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(update)
	})
		.then((res) => res.json())
		.then((data) => {
			console.log(data)
			let updatedUser = { ...userData }
			updatedUser.characters.splice(i, 1, data.character)
			setUserData(updatedUser)
			handleToggle()
		})
		.catch((err) => {
			console.log('something went wrong', err)
		})
}

// *** Helper Functions ***

// Changes string to camel case, credit to Christian C. Salvadó
// from https://stackoverflow.com/questions/2970525/converting-any-string-into-camel-case
function camelize(str) {
	return str
		.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
			return index === 0 ? word.toLowerCase() : word.toUpperCase()
		})
		.replace(/\s+/g, '')
}

// Returns the character info based on userData and characterId
const getCharacter = (userData, characterId) =>
	userData.characters.find((character) => character._id === characterId)

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
// Creates form data for DTA Tables
const writeDTAData = (dialogType, dialogData) => {
	if (dialogType.attribute === 'skillsLearning') {
		const skillsLearning = {
			name: dialogData.name,
			root1: dialogData.root1,
			values: [
				dialogData.routine,
				dialogData.fate,
				dialogData.persona,
				dialogData.deeds
			]
		}
		if (dialogData.root2.length > 0) {
			skillsLearning.root2 = dialogData.root2
		}
		const character = {}
		character[`${dialogType.attribute}`] = skillsLearning
		return character
	} else {
		const dta = {
			name: dialogData.name,
			values: [
				dialogData.shade,
				dialogData.exponent,
				dialogData.tax,
				dialogData.routine,
				dialogData.difficult,
				dialogData.challenging,
				dialogData.fate,
				dialogData.persona,
				dialogData.deeds
			]
		}
		if (dialogData.root1.length > 0) {
			dta.root1 = dialogData.root1
		}
		if (dialogData.root2.length > 0) {
			dta.root2 = dialogData.root2
		}
		const character = {}
		character[`${dialogType.attribute}`] = dta
		return character
	}
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

// Toggles the padding
const handleChangeDense = (dense, setDense) => {
	setDense(!dense)
}

export {
	fetchUser,
	handleCharacterUpdate,
	handleAttributeUpdate,
	camelize,
	getCharacter,
	createEmptyTableData,
	getComparator,
	handleRequestSort,
	handleChangePage,
	handleChangeRowsPerPage,
	handleChangeDense
}
