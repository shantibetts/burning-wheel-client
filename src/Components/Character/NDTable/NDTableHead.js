import * as React from 'react'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import {
	nameDescTableHeadCells,
	nameDescCallOnTableHeadCells
} from '../../TableConfig'

const NDTableHead = (props) => {
	const { attribute, dense, setDense } = props

	let headCells = nameDescTableHeadCells

	if (attribute === 'traits') {
		headCells = nameDescCallOnTableHeadCells
	}

	return (
		<TableHead>
			<TableRow>
				{headCells.map((column) => (
					<TableCell key={column.id} align={column.align}>
						{column.label}
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	)
}

export default NDTableHead
