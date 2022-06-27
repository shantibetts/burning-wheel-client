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
	stableSort,
	handleRequestSort,
	handleChangePage,
	handleChangeRowsPerPage,
	handleChangeDense
} from './Utils'
import TableHeader from './TableHeader'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import AddIcon from '@mui/icons-material/Add'
import UserRow from './UserRow'

const User = (props) => {
	const { tablet, desktop, userData, setUserData } = props

	// States for controlling the Table
	const [rows, setRows] = React.useState([])
	const [order, setOrder] = React.useState('asc')
	const [orderBy, setOrderBy] = React.useState('calories')
	const [selected, setSelected] = React.useState('')
	const [page, setPage] = React.useState(0)
	const [dense, setDense] = React.useState(false)
	const [rowsPerPage, setRowsPerPage] = React.useState(5)

	// Delete a character from a user
	const handleDeleteCharacter = () => {}

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

	if (userData === null) {
		return (
			<div>
				<Typography variant="h2" sx={{ py: 3 }}>
					Oops!
				</Typography>
				<Typography variant="body1" sx={{ pt: 2, pb: 4 }}>
					Something went wrong! Please report this bug.
				</Typography>
			</div>
		)
	} else {
		return (
			<Box sx={{ width: '100%' }}>
				<Paper sx={{ width: '100%', mb: 2 }}>
					{/* Table toolbar and Title */}
					<Toolbar
						sx={{
							pl: { sm: 2 },
							pr: { xs: 1, sm: 1 }
						}}
					>
						<Tooltip title="add character">
							<IconButton onClick={handleAddCharacterDialogToggle}>
								<AddIcon />
							</IconButton>
						</Tooltip>
						<Typography
							sx={{ flex: '1 1 100%' }}
							variant="h6"
							id="tableTitle"
							component="div"
						>
							Characters
						</Typography>
					</Toolbar>
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
								dataName={User}
								tablet={tablet}
								desktop={desktop}
							/>
							<TableBody>
								{
									/* if you don't need to support IE11, you can replace the `stableSort` call with:
                                rows.slice().sort(getComparator(order, orderBy)) */
									stableSort(userData.characters, getComparator(order, orderBy))
										.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
										.map((row) => (
											<UserRow
												key={row._id}
												row={row}
												selected={selected}
												setSelected={setSelected}
												tablet={tablet}
												desktop={desktop}
											/>
										))
								}
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
							onChange={(event) => handleChangeDense(event, setDense)}
						/>
					}
					label="Dense padding"
				/>
			</Box>
		)
	}
}

export default User