import * as React from 'react'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import IconButton from '@mui/material/IconButton'
import EditIcon from '@mui/icons-material/Edit'

const DTARow = (props) => {
	const {
		title,
		row,
		setUserData,
		handleDTADialogToggle,
		setDialogData,
		setDialogType
	} = props

	const handleDTAEditToggle = () => {}

	return (
		<React.Fragment>
			<TableRow hover>
				<TableCell component="th" scope="row">
					<IconButton
						aria-label="fast edit"
						size="small"
						onClick={() => {
							handleDTADialogToggle(setUserData)
							setDialogData(row)
							setDialogType({ title: title, type: 'edit' })
						}}
					>
						<EditIcon />
					</IconButton>
				</TableCell>
				<TableCell>{row.name}</TableCell>
				{row.values.map((value, i) => (
					<TableCell key={i} align="left">
						{value}
					</TableCell>
				))}
			</TableRow>
		</React.Fragment>
	)
}

export default DTARow
