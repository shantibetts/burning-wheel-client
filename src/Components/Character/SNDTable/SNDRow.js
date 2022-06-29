import * as React from 'react'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import IconButton from '@mui/material/IconButton'
import EditIcon from '@mui/icons-material/Edit'

const SNDRow = (props) => {
	const { row, setUserData } = props

	const handleSNDEditToggle = () => {}

	return (
		<React.Fragment>
			<TableRow hover>
				<TableCell component="th" scope="row">
					<IconButton
						aria-label="fast edit"
						size="small"
						onClick={() => handleSNDEditToggle(setUserData)}
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

export default SNDRow
