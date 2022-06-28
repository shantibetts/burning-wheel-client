import * as React from 'react'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import IconButton from '@mui/material/IconButton'
import EditIcon from '@mui/icons-material/Edit'

const DTARow = (props) => {
	const { row, setUserData } = props

	const handleSkillsLearningEditToggle = () => {}
	const rowName = row.name.charAt(0).toUpperCase() + row.name.slice(1)
	const rowArtha = row.values.slice(1)
	const routineTests = row.values[0]

	return (
		<React.Fragment>
			<TableRow hover>
				<TableCell component="th" scope="row">
					<IconButton
						aria-label="fast edit"
						size="small"
						onClick={() => handleSkillsLearningEditToggle(setUserData)}
					>
						<EditIcon />
					</IconButton>
				</TableCell>
				<TableCell>{rowName}</TableCell>
				{/* Spacers for shade, exponent and tax */}
				<TableCell colSpan={3} />
				{/* Routine tests & spacers for difficult and challenging */}
				<TableCell>{routineTests}</TableCell>
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

export default DTARow
