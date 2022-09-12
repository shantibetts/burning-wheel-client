import * as React from 'react'
import { characterTableCells } from '../TableConfig'
import { capitalize } from '../Utils'

// Context
import { useFormContext } from '../../hooks/useFormContext'

// MUI Components
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import AddIcon from '@mui/icons-material/Add'

const SNDTableHead = ({ attribute }) => {
	// Form dispatch from context
	const { formDispatch } = useFormContext()

	// Table head constants
	let tableCells = characterTableCells[attribute]
	let tooltip = 'Add new ' + attribute.slice(0, -1)

	// Remove add new button from stats table
	let addButton = (
		<Tooltip title={tooltip}>
			<IconButton
				onClick={() => {
					formDispatch({
						type: 'NEW',
						payload: {
							formAttribute: attribute,
							formFields: tableCells
						}
					})
				}}
			>
				<AddIcon />
			</IconButton>
		</Tooltip>
	)

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
