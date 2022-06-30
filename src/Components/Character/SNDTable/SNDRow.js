import * as React from 'react'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import IconButton from '@mui/material/IconButton'
import EditIcon from '@mui/icons-material/Edit'
import { createSNDData } from './../../Utils'

const SNDRow = (props) => {
	const {
		attribute,
		row,
		handleSNDDialogToggle,
		setDialogData,
		setDialogType
	} = props

	return (
		<React.Fragment>
			<TableRow hover>
				<TableCell component="th" scope="row">
					<IconButton
						aria-label="fast edit"
						size="small"
						onClick={() => handleSNDDialogToggle()}
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
