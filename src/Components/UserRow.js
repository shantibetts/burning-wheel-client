import * as React from 'react'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import moment from 'moment'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import { handleCharacterTrashToggle } from './Utils'
import { useNavigate, useLocation } from 'react-router-dom'

const UserRow = (props) => {
	const { row, userData, setUserData } = props
	const navigate = useNavigate()
	let location = useLocation().pathname

	const handleCharacterNavigation = () => {
		navigate(`${location}/:${row.characterName}`, { replace: true })
	}

	return (
		<React.Fragment>
			<TableRow hover onClick={handleCharacterNavigation}>
				<TableCell>
					<IconButton
						aria-label="delete character"
						size="small"
						onClick={() =>
							handleCharacterTrashToggle(setUserData, userData, row._id)
						}
					>
						<DeleteIcon />
					</IconButton>
				</TableCell>
				<TableCell component="th" scope="row">
					{row.characterName}
				</TableCell>
				<TableCell align="left">{row.game}</TableCell>
				<TableCell align="left">
					{moment(row.dateCreated).format('MMM Do YY')}
				</TableCell>
				<TableCell align="left">
					{moment(row.dateEdited).format('MMM Do YY')}
				</TableCell>
			</TableRow>
		</React.Fragment>
	)
}

export default UserRow
