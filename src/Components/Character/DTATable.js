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
} from '../Utils'
import TableHeader from '../TableHeader'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import AddIcon from '@mui/icons-material/Add'
import DTARow from './DTARow'
import TableHead from '@mui/material/TableHead'
import DTATableHead from './DTATableHead'

const DTATable = (props) => {
	const { title } = props

	// States for controlling the Table
	const [dense, setDense] = React.useState(false)

	return (
		<Paper sx={{ width: '100%', mb: 2 }}>
			{/* Table toolbar and Title */}
			<TableContainer>
				<Table
					stickyHeader
					sx={{ minWidth: 370 }}
					aria-labelledby="tableTitle"
					size={dense ? 'small' : 'medium'}
				>
					<DTATableHead />
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
	)
}

export default DTATable
