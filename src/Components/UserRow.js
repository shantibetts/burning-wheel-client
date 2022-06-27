import * as React from 'react'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import moment from 'moment'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import TableControls from './TableControls'

const UserRow = (props) => {
	const { tablet, desktop, selected, setSelected, row } = props

	// Populate Issues at 600px
	// let issuesCell = ''
	// if (tablet) {
	// 	issuesCell = <TableCell align="center">{row.issues}</TableCell>
	// }
	// let dateCreatedCell = ''
	// if (desktop) {
	// 	dateCreatedCell = (
	// 		<TableCell align="center">
	// 			{moment(row.dateCreated).format('MMM Do YY')}
	// 		</TableCell>
	// 	)
	// }

	return (
		<React.Fragment>
			<TableRow hover aria-checked={isItemSelected}>
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
				<TableCell align="right">
					{moment(row.dateEdited).format('MMM Do YY')}
				</TableCell>
			</TableRow>
		</React.Fragment>
	)
}

export default UserRow
