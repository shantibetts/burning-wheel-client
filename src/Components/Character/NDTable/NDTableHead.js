import * as React from 'react'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import { strengthNameDescTableHeadCells } from '../../TableConfig'

const NDTableHead = (props) => {
	const { dense, setDense } = props
	return (
		<TableHead>
			<TableRow>
				{strengthNameDescTableHeadCells.map((column) => (
					<TableCell key={column.id} align={column.align}>
						{column.label}
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	)
}

export default NDTableHead
