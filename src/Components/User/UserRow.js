import * as React from 'react'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import moment from 'moment'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import { handleCharacterUpdate } from '../Utils'
import { useNavigate } from 'react-router-dom'

const UserRow = (props) => {
	const { row, userData, setUserData, setCharacterIndex, characterIndex } =
		props
	const navigate = useNavigate()

	const handleCharacterNavigation = () => {
		setCharacterIndex(characterIndex)
		navigate(`/character/${row.characterName}`, { replace: true })
	}

	// create trashToggle object
	const trashToggle = { isTrash: !userData.characters[characterIndex] }

	return (
		<React.Fragment>
			<TableRow hover onClick={handleCharacterNavigation}>
				<TableCell>
					<IconButton
						aria-label="delete character"
						size="small"
						onClick={() =>
							handleCharacterUpdate(setUserData, userData, row._id, trashToggle)
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
					{moment(row.dateCreated).format('MM/DD/YY')}
				</TableCell>
				<TableCell align="left">
					{moment(row.dateEdited).format('MM/DD/YY')}
				</TableCell>
			</TableRow>
		</React.Fragment>
	)
}

export default UserRow
