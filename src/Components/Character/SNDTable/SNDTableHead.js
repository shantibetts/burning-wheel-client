import * as React from 'react'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import { dieTestArthaCells } from './../../TableConfig'

const SNDTableHead = (props) => {
	const { dense, setDense } = props
	return (
		<TableHead>
			<TableRow>
				<TableCell colSpan={2} />
				<TableCell align="center" colSpan={3}>
					Die Pool
				</TableCell>
				<TableCell align="center" colSpan={3}>
					Tests
				</TableCell>
				<TableCell align="center" colSpan={3}>
					Artha
				</TableCell>
			</TableRow>
			<TableRow>
				{dieTestArthaCells.map((column) => (
					<TableCell key={column.id} align={column.align}>
						{column.label}
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	)
}

export default SNDTableHead
