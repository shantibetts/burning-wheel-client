import * as React from 'react'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import IconButton from '@mui/material/IconButton'
import EditIcon from '@mui/icons-material/Edit'
import { SNDCTableCells } from '../TableConfig'

const SNDRow = ({
	type,
	attribute,
	row,
	handleDialogToggle,
	setDialogData,
	setDialogType
}) => {
	// Get list of cells to iterate over
	let rowCells = SNDCTableCells()
	if (type === 'SND') {
		rowCells.pop()
	}
	if (type === 'ND') {
		rowCells = rowCells.slice(1, 3)
	}
	if (type === 'NDC') {
		rowCells.shift()
	}

	// Toggle isActive
	const handleIsActiveToggle = () => {}

	return (
		<React.Fragment>
			<TableRow hover>
				<TableCell component="th" scope="row">
					<IconButton
						aria-label="edit row"
						size="small"
						onClick={() => {
							handleDialogToggle()
							setDialogData(row)
							setDialogType('edit')
						}}
					>
						<EditIcon />
					</IconButton>
				</TableCell>
				{rowCells.map((cell, i) => {
					if (cell.id === 'strength') {
						return (
							<TableCell key={i} align={cell.align}>
								{row.shade + row.exponent}
							</TableCell>
						)
					} else if (cell.id === 'description' && attribute === 'beliefs') {
						return (
							<TableCell
								key={i}
								align={cell.align}
								onClick={handleIsActiveToggle}
							>
								{row.description}{' '}
								<span
									style={{
										textDecoration: [row.isActive ? 'none' : 'line-through']
									}}
								>
									{row.action}
								</span>
							</TableCell>
						)
					} else {
						return (
							<TableCell key={i} align={cell.align}>
								{row[cell.id]}
							</TableCell>
						)
					}
				})}
			</TableRow>
		</React.Fragment>
	)
}

export default SNDRow
