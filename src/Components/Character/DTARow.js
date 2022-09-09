import * as React from 'react'
import { dieTestArthaCells, skillsLearningCells } from '../TableConfig'

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
	let rowCells = dieTestArthaCells
	if (attribute === 'skillsLearning') {
		rowCells = skillsLearningCells.splice()
	}

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
										formFields: rowCells,
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
					if (cell.id === 'empty') {
						return <TableCell key={i} />
					} else {
						return (
							<TableCell key={i} align={cell.align}>
								{row[cell.id]}
							</TableCell>
						)
					}
				})}
			</TableRow>
		</React.Fragment>
	)
}

export default DTARow
