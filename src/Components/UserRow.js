import * as React from 'react'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'

// Context
import { useCharactersContext } from '../hooks/useCharactersContext'

// MUI components
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
// import IconButton from '@mui/material/IconButton'
// import DeleteIcon from '@mui/icons-material/Delete'

const UserRow = ({ row }) => {
	const { characterList, charactersDispatch } = useCharactersContext()

	const navigate = useNavigate()

	const handleCharacterNavigation = () => {
		const currentCharacter = characterList.find(
			(character) => (character._id = row._id)
		)
		charactersDispatch({
			type: 'SET_CHARACTER',
			payload: currentCharacter
		})
		navigate(`/character/${row.name}`)
	}

	// const handleCharacterDelete = async () => {}

	return (
		<React.Fragment>
			<TableRow hover onClick={handleCharacterNavigation}>
				<TableCell>
					{/* <IconButton
						aria-label="delete character"
						size="small"
						onClick={handleCharacterDelete}
					>
						<DeleteIcon />
					</IconButton> */}
				</TableCell>
				<TableCell component="th" scope="row">
					{row.name}
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
