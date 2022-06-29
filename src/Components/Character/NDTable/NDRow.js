import * as React from 'react'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import IconButton from '@mui/material/IconButton'
import EditIcon from '@mui/icons-material/Edit'

const NDRow = (props) => {
	const { row, setUserData } = props

	const handleNDEditToggle = () => {}

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
				<TableCell>{row.shade + row.strength}</TableCell>
				<TableCell>{row.name}</TableCell>
				<TableCell>{row.description}</TableCell>
			</TableRow>
		</React.Fragment>
	)
}

export default NDRow
