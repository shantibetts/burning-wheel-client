import * as React from 'react'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import moment from 'moment'
import IconButton from '@mui/material/IconButton'
import EditIcon from '@mui/icons-material/Edit'
import { handleCharacterTrashToggle } from '../Utils'
import { useNavigate } from 'react-router-dom'

const UserRow = (props) => {
	const { row, character, setUserData } = props

	const handleCharacterBulkEditToggle = () => {}

	return (
		<React.Fragment>
			<TableRow hover>
				<TableCell component="th" scope="row">
					{row.name}
					<IconButton
						aria-label="fast edit"
						size="small"
						onClick={() => handleCharacterBulkEditToggle(setUserData)}
					>
						<EditIcon />
					</IconButton>
				</TableCell>
				{row.values.map((value) => (
					<TableCell align="left">{value}</TableCell>
				))}
			</TableRow>
		</React.Fragment>
	)
}

export default UserRow
