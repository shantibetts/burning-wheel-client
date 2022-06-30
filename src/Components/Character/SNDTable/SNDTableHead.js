import * as React from 'react'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import AddIcon from '@mui/icons-material/Add'
import { SNDCTableCells } from './../../TableConfig'

const SNDTableHead = (props) => {
	const { type, tooltip, handleDialogToggle, dense, setDense } = props

	let tableCells = SNDCTableCells()
	if (type === 'SND') {
		tableCells.pop()
	}
	if (type === 'ND') {
		tableCells = tableCells.slice(2, 4)
	}
	if (type === 'NDC') {
		tableCells.splice(1, 1)
	}

	// Remove add new button from stats table
	let addButton = (
		<Tooltip title={tooltip}>
			<IconButton onClick={handleDialogToggle}>
				<AddIcon />
			</IconButton>
		</Tooltip>
	)

	return (
		<TableHead>
			<TableRow>
				<TableCell>{addButton}</TableCell>
				{tableCells.map((column) => {
					return (
						<TableCell key={column.id} align={column.align}>
							{column.label}
						</TableCell>
					)
				})}
			</TableRow>
		</TableHead>
	)
}

export default SNDTableHead
