import * as React from 'react'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import AddIcon from '@mui/icons-material/Add'
import { dieTestArthaCells } from '../TableConfig'

const DTATableHead = (props) => {
	const { attribute, tooltip, handleDialogToggle, dense, setDense } = props

	// Remove add new button from stats table
	let addButton = (
		<Tooltip title={tooltip}>
			<IconButton onClick={handleDialogToggle}>
				<AddIcon />
			</IconButton>
		</Tooltip>
	)
	if (attribute === 'stats') {
		addButton = ''
	}

	return (
		<TableHead>
			<TableRow>
				<TableCell>{addButton}</TableCell>
				<TableCell />
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

export default DTATableHead
