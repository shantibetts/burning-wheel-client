import * as React from 'react'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import { handleChangeDense } from '../Utils'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import { dieTestArthaTableHeadCells } from './../TableConfig'

const DTATableHead = (props) => {
	const { dense, setDense } = props
	return (
		<TableHead>
			<TableRow>
				<TableCell colSpan={2}>
					<FormControlLabel
						control={
							<Switch
								checked={dense}
								onChange={(event) => handleChangeDense(event, setDense)}
							/>
						}
						label="Dense padding"
					/>
				</TableCell>
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
				{dieTestArthaTableHeadCells.map((column) => (
					<TableCell
						key={column.id}
						align={column.align}
						style={{ top: 57, minWidth: column.minWidth }}
					>
						{column.label}
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	)
}

export default DTATableHead
