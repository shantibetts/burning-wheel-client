import apiUrl from '../apiUrl'

// *** CRUD Functions ****

// Functions to GET user with charactesr from database
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

// Delete a character from a user
const handleCharacterTrashToggle = (setUserData, userData, id) => {
	// find index of row
	const i = userData.characters.findIndex((character) => character._id === id)
	// update DB to toggle character isTrash
	fetch(apiUrl + `/characters/` + id, {
		method: 'PATCH',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			isTrash: !userData.characters[i].isTrash
		})
	})
		.then((res) => res.json())
		.then((data) => {
			let updatedUser = { ...userData }
			updatedUser.characters.splice(i, 1, data.character)
			setUserData(updatedUser)
		})
		.catch((err) => {
			console.log('something went wrong', err)
		})
}

// *** Helper Functions ***

// Returns the character info based on userData and characterIndex
const getCharacter = (userData, characterIndex) => {
	return userData.characters[characterIndex]
}

// Creates form data for DTA Tables
const createDTAData = (
	name,
	shade,
	exponent,
	tax,
	routine,
	difficult,
	challenging,
	fate,
	persona,
	deeds
) => {
	return {
		name,
		shade,
		exponent,
		tax,
		routine,
		difficult,
		challenging,
		fate,
		persona,
		deeds
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
	handleCharacterTrashToggle,
	getCharacter,
	createDTAData,
	getComparator,
	handleRequestSort,
	handleChangePage,
	handleChangeRowsPerPage,
	handleChangeDense
}
