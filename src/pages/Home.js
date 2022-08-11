import { useState, useEffect } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
	getComparator,
	handleRequestSort,
	handleChangePage,
	handleChangeRowsPerPage,
	handleChangeDense
} from '../components/Utils'
import { useCharactersContext } from '../hooks/useCharactersContext'
import { useAuthContext } from '../hooks/useAuthContext'

// MUI Components
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import Paper from '@mui/material/Paper'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'

// Components
import TableHeader from '../components/TableHeader'
import UserRow from '../components/UserRow'
import TableToolbar from '../components/TableToolbar'

const Home = () => {
	// Get context
	const { dispatch } = useCharactersContext()
	const { user } = useAuthContext()

	// States for controlling the Table
	const [rows, setRows] = useState([])
	const [order, setOrder] = useState('asc')
	const [orderBy, setOrderBy] = useState('characterName')
	const [page, setPage] = useState(0)
	const [rowsPerPage, setRowsPerPage] = useState(5)
	// dummy state for dense - add to user?
	const [dense, setDense] = useState(false)
	// State for API load error
	const [error, setError] = useState(null)

	// on load, fetch character data
	useEffect(() => {
		const fetchCharacters = async () => {
			const response = await fetch('/api/characters', {
				headers: {
					Authorization: `Bearer ${user.token}`
				}
			})
			const json = await response.json()

			if (response.ok) {
				setError(null)
				dispatch({ type: 'SET_CHARACTERS', payload: json })
				let rowsToDisplay = json.characters.filter(
					(character) => !character.isTrash
				)
				setRows(rowsToDisplay)
			} else {
				setError(json.error)
			}
		}
		if (user) {
			fetchCharacters()
		}
	}, [dispatch, user])

	// old use effect
	// useEffect(() => {
	// 	if (userData) {
	// 		let rowsToDisplay = userData.characters.filter(
	// 			(character) => !character.isTrash
	// 		)
	// 		setRows(rowsToDisplay)
	// 	}
	// }, [userData])

	// Open dialog to add a new character
	const handleAddCharacterDialogToggle = () => {}

	// Adding propTypes for the TableHead Component
	TableHeader.propTypes = {
		onRequestSort: PropTypes.func.isRequired,
		order: PropTypes.oneOf(['asc', 'desc']).isRequired,
		orderBy: PropTypes.string.isRequired
	}

	// Avoid a layout jump when reaching the last page with empty rows.
	const emptyRows =
		page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0

	// Error message
	const errorMessage = (
		<div>
			<Typography variant="h2" sx={{ py: 3 }}>
				Error
			</Typography>
			<Typography variant="body1" sx={{ pt: 2, pb: 4 }}>
				{error}
			</Typography>
		</div>
	)

	return (
		<Box sx={{ width: '100%' }}>
			<Paper sx={{ width: '100%', mb: 2 }}>
				{/* Table toolbar and Title */}
				<TableToolbar
					title="Characters"
					handleAdd={handleAddCharacterDialogToggle}
				/>
				<TableContainer>
					<Table
						sx={{ minWidth: 370 }}
						aria-labelledby="tableTitle"
						size={dense ? 'small' : 'medium'}
					>
						<TableHeader
							order={order}
							orderBy={orderBy}
							onRequestSort={(event, property) =>
								handleRequestSort(
									event,
									property,
									order,
									orderBy,
									setOrder,
									setOrderBy
								)
							}
							dataName={'User'}
						/>
						<TableBody>
							{rows
								.slice()
								.sort(getComparator(order, orderBy))
								.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
								.map((row) => (
									<UserRow key={row._id} row={row} />
								))}
							{emptyRows > 0 && (
								<TableRow
									style={{
										height: (dense ? 33 : 53) * emptyRows
									}}
								>
									<TableCell colSpan={6} />
								</TableRow>
							)}
						</TableBody>
					</Table>
				</TableContainer>
				<TablePagination
					rowsPerPageOptions={[5, 10, 25]}
					component="div"
					count={rows.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onPageChange={(event, newPage) =>
						handleChangePage(event, newPage, setPage)
					}
					onRowsPerPageChange={(event) =>
						handleChangeRowsPerPage(event, setRowsPerPage, setPage)
					}
				/>
			</Paper>
			<FormControlLabel
				control={
					<Switch
						checked={dense}
						onChange={() => handleChangeDense(dense, setDense)}
					/>
				}
				label="Dense padding"
			/>
			{error && errorMessage}
		</Box>
	)
}

export default Home
