import * as React from 'react'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import { SNDCTableCells } from './../../TableConfig'

const SNDTableHead = (props) => {
	const { type, attribute, dense, setDense } = props

	let tableCells = SNDCTableCells()
	if (type === 'SND') {
		tableCells.pop()
	}
	if (type === 'ND') {
		tableCells = [tableCells[0], ...tableCells.slice(2, 4)]
	}
	if (type === 'NDC') {
		tableCells.splice(1, 1)
	}

	return (
		<TableHead>
			<TableRow>
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
