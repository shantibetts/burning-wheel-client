import * as React from 'react'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import moment from 'moment'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import { handleCharacterTrashToggle } from './Utils'

const UserRow = (props) => {
	const { row, userData, setUserData } = props

	return (
		<React.Fragment>
			<TableRow
				hover
				onClick={() => {
					handleCharacterTrashToggle(setUserData, userData, row._id)
					console.log(row, row._id)
				}}
			>
				<TableCell>
					<IconButton aria-label="delete character" size="small">
						<DeleteIcon />
					</IconButton>
				</TableCell>
				<TableCell component="th" scope="row">
					{row.firstName + ' ' + row.lastName}
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
