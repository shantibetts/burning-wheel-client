import * as React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import Paper from '@mui/material/Paper'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import {
	getComparator,
	handleRequestSort,
	handleChangePage,
	handleChangeRowsPerPage,
	handleChangeDense
} from '../Components/Utils'
import TableHeader from '../Components/TableHeader'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import UserRow from '../Components/User/UserRow'
import TableToolbar from '../Components/TableToolbar'
import Button from '@mui/material/Button'
import { Link as RouterLink } from 'react-router-dom'

const Home = (props) => {
	const {
		tablet,
		desktop,
		userData,
		setUserData,
		setCharacterId,
		dense,
		setDense
	} = props

	// States for controlling the Table
	const [rows, setRows] = React.useState([])
	const [order, setOrder] = React.useState('asc')
	const [orderBy, setOrderBy] = React.useState('characterName')
	const [page, setPage] = React.useState(0)
	const [rowsPerPage, setRowsPerPage] = React.useState(5)

	React.useEffect(() => {
		if (userData) {
			let rowsToDisplay = userData.characters.filter(
				(character) => !character.isTrash
			)
			setRows(rowsToDisplay)
		}
	}, [userData])

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

	if (userData && userData !== null) {
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
										<UserRow
											key={row._id}
											row={row}
											userData={userData}
											setUserData={setUserData}
											setCharacterId={setCharacterId}
										/>
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
			</Box>
		)
	} else {
		return (
			<div>
				<Typography variant="h2" sx={{ py: 3 }}>
					Oops!
				</Typography>
				<Typography variant="body1" sx={{ pt: 2, pb: 4 }}>
					Something went wrong! Please report this bug.
				</Typography>
				<Button component={RouterLink} to="/">
					Home
				</Button>
			</div>
		)
	}
}

export default Home
