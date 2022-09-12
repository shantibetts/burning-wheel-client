import * as React from 'react'
import { characterTableCells } from '../TableConfig'

// Context
import { useFormContext } from '../../hooks/useFormContext'

// MUI Components
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import IconButton from '@mui/material/IconButton'
import EditIcon from '@mui/icons-material/Edit'
import Tooltip from '@mui/material/Tooltip'

const DTARow = ({ attribute, row }) => {
	// Form context
	const { formDispatch } = useFormContext()

	// Get list of cells to iterate over
	let rowCells = characterTableCells[attribute]

	return (
		<React.Fragment>
			<TableRow hover>
				<TableCell component="th" scope="row">
					<Tooltip title={'Edit ' + row.name.toLowerCase()}>
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
					</Tooltip>
				</TableCell>
				{rowCells.map((cell, i) => {
					if (cell === '') {
						return <TableCell key={i} />
					}
					if (cell === 'strength') {
						return (
							<TableCell key={i} align="left">
								{row.shade + row.exponent}
							</TableCell>
						)
					}

					return (
						<TableCell key={i} align="left">
							{row[cell]}
						</TableCell>
					)
				})}
			</TableRow>
		</React.Fragment>
	)
}

export default DTARow
