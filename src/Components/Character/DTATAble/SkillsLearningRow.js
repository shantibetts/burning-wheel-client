import * as React from 'react'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import IconButton from '@mui/material/IconButton'
import EditIcon from '@mui/icons-material/Edit'
import { createDTAData } from './../../Utils'

const SkillsLearningRow = (props) => {
	const {
		attribute,
		row,
		handleDTADialogToggle,
		setDialogData,
		setDialogType
	} = props

	// Creating a list of values for artha only
	const rowArtha = row.values.slice(1)

	return (
		<React.Fragment>
			<TableRow hover>
				<TableCell component="th" scope="row">
					<IconButton
						aria-label="fast edit"
						size="small"
						onClick={() => {
							handleDTADialogToggle()
							setDialogData(
								createDTAData(
									row.name,
									0,
									0,
									0,
									row.values[0],
									0,
									0,
									...rowArtha,
									row.root1,
									row.root2
								)
							)
							setDialogType({ attribute: attribute, type: 'edit' })
						}}
					>
						<EditIcon />
					</IconButton>
				</TableCell>
				<TableCell>{row.name}</TableCell>
				{/* Spacers for shade, exponent and tax */}
				<TableCell colSpan={3} />
				{/* Routine tests & spacers for difficult and challenging */}
				<TableCell>{row.values[0]}</TableCell>
				<TableCell colSpan={2} />
				{/* Artha */}
				{rowArtha.map((value, i) => (
					<TableCell key={i} align="left">
						{value}
					</TableCell>
				))}
			</TableRow>
		</React.Fragment>
	)
}

export default SkillsLearningRow
