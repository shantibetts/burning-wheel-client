import { userTableCells } from './TableConfig'
import { camelize } from './Utils'

// MUI components
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { visuallyHidden } from '@mui/utils'
import TableSortLabel from '@mui/material/TableSortLabel'
import Box from '@mui/material/Box'
import TableCell from '@mui/material/TableCell'

// Creates the Table Heading with sort and list functionality
const TableHeader = (props) => {
	const { order, orderBy, onRequestSort } = props

	const createSortHandler = (property) => (event) => {
		onRequestSort(event, property)
	}

	return (
		<TableHead>
			<TableRow>
				<TableCell />
				{/* This maps through the headCells array to create each header */}
				{userTableCells.map((cell, i) => (
					// Creates the Header itself
					<TableCell
						key={i}
						align="left"
						sortDirection={orderBy === camelize(cell) ? order : false}
					>
						{/* This is the sort label, where and what direction */}
						<TableSortLabel
							active={orderBy === camelize(cell)}
							direction={orderBy === camelize(cell) ? order : 'asc'}
							onClick={createSortHandler(camelize(cell))}
						>
							{/* This is the actual name of the heading */}
							{cell}
							{orderBy === camelize(cell) ? (
								<Box component="span" sx={visuallyHidden}>
									{order === 'desc' ? 'sorted descending' : 'sorted ascending'}
								</Box>
							) : null}
						</TableSortLabel>
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	)
}

export default TableHeader
