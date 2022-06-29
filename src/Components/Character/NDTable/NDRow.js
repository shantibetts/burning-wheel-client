import * as React from 'react'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import IconButton from '@mui/material/IconButton'
import EditIcon from '@mui/icons-material/Edit'

const NDRow = (props) => {
	const { row, setUserData } = props

	const handleNDEditToggle = () => {}

	let rowDescription = row.description
	let textDecoration = 'none'
	let callOn = ''

	if (row.action) {
		rowDescription += ' ' + row.action
		row.isActive
			? (textDecoration = 'none')
			: (textDecoration = 'strikethrough')
	}
	if (row.callOn) {
		callOn = <TableCell> {row.callOn} </TableCell>
	}

	return (
		<React.Fragment>
			<TableRow hover>
				<TableCell component="th" scope="row">
					<IconButton
						aria-label="fast edit"
						size="small"
						onClick={() => handleNDEditToggle(setUserData)}
					>
						<EditIcon />
					</IconButton>
				</TableCell>
				<TableCell>{row.name}</TableCell>
				<TableCell sx={{ textDecoration: textDecoration }}>
					{rowDescription}
				</TableCell>
				{callOn}
			</TableRow>
		</React.Fragment>
	)
}

export default NDRow
