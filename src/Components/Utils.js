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
		effect: '',
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
