import * as React from 'react'
import { characterTableCells } from '../TableConfig'
import { capitalize } from '../Utils'

// MUI Components
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'

const SNDTableHead = ({ attribute, addButton }) => {
	// Table head constants
	let tableCells = characterTableCells[attribute]

	return (
		<TableHead>
			<TableRow>
				<TableCell>{addButton}</TableCell>
				{tableCells.map((cell) => {
					return (
						<TableCell key={cell} align="left">
							{capitalize(cell)}
						</TableCell>
					)
				})}
			</TableRow>
		</TableHead>
	)
}

export default SNDTableHead
