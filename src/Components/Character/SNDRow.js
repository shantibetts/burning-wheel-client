import * as React from 'react'
import { characterTableCells } from '../TableConfig'

// Context
import { useFormContext } from '../../hooks/useFormContext'

// MUI Components
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import IconButton from '@mui/material/IconButton'
import EditIcon from '@mui/icons-material/Edit'

const SNDRow = ({ attribute, row }) => {
	// Form dispatch from context
	const { formDispatch } = useFormContext()

	// Get list of cells to iterate over
	let rowCells = characterTableCells[attribute]

	// Toggle isActive for beliefs (not implemented yet)
	const handleIsActiveToggle = () => {}

	return (
		<React.Fragment>
			<TableRow hover>
				<TableCell component="th" scope="row">
					<IconButton
						aria-label="edit row"
						size="small"
						onClick={() => {
							formDispatch({
								type: 'EDIT',
								payload: {
									formAttribute: attribute,
									formData: row
								}
							})
						}}
					>
						<EditIcon />
					</IconButton>
				</TableCell>
				{rowCells.map((cell, i) => {
					if (cell === 'strength') {
						return (
							<TableCell key={i} align="left">
								{row.shade + row.exponent}
							</TableCell>
						)
					} else if (cell === 'description' && attribute === 'beliefs') {
						return (
							<TableCell key={i} align="left" onClick={handleIsActiveToggle}>
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
							<TableCell key={i} align="left">
								{row[cell]}
							</TableCell>
						)
					}
				})}
			</TableRow>
		</React.Fragment>
	)
}

export default SNDRow
