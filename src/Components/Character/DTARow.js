import * as React from 'react'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import IconButton from '@mui/material/IconButton'
import EditIcon from '@mui/icons-material/Edit'
import { handleCharacterTrashToggle } from '../Utils'
import { useNavigate } from 'react-router-dom'

const UserRow = (props) => {
	const { row, character, setUserData } = props

	const handleCharacterBulkEditToggle = () => {}
	const rowName = row.name.charAt(0).toUpperCase() + row.name.slice(1)

	return (
		<React.Fragment>
			<TableRow hover>
				<TableCell component="th" scope="row">
					<IconButton
						aria-label="fast edit"
						size="small"
						onClick={() => handleCharacterBulkEditToggle(setUserData)}
					>
						<EditIcon />
					</IconButton>
				</TableCell>
				<TableCell>{rowName}</TableCell>
				{row.values.map((value, i) => (
					<TableCell key={i} align="left">
						{value}
					</TableCell>
				))}
			</TableRow>
		</React.Fragment>
	)
}

export default UserRow
