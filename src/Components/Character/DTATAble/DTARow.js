import * as React from 'react'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import IconButton from '@mui/material/IconButton'
import EditIcon from '@mui/icons-material/Edit'
import { createDTAData } from './../../Utils'

const DTARow = (props) => {
	const {
		attribute,
		row,
		handleDTADialogToggle,
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
						onClick={() => {
							handleDTADialogToggle()
							setDialogData(
								createDTAData(row.name, ...row.values, row.root1, row.root2)
							)
							setDialogType({ attribute: attribute, type: 'edit' })
						}}
					>
						<EditIcon />
					</IconButton>
				</TableCell>
				<TableCell>{row.name}</TableCell>
				{row.values.map((value, i) => (
					<TableCell key={i} align="left">
						{value}
					</TableCell>
				))}
			</TableRow>
		</React.Fragment>
	)
}

export default DTARow
