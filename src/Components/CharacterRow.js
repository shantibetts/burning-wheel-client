import * as React from 'react'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import moment from 'moment'
import IconButton from '@mui/material/IconButton'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import TableControls from './TableControls'

const CharacterRow = (props) => {
	const {
		tablet,
		desktop,
		selected,
		setSelected,
		dataName,
		row,
		handleBugDialogToggle,
		handleUserDialogToggle,
		handleDetailsDialogToggle,
		handleMenuOpen,
		setAllBugs,
		setDialogData,
		setDialogType
	} = props

	// Sets whichever row is selected by ID
	const isItemSelected = selected._id === row._id ? true : false
	let priorityBackground = ''

	if (dataName === 'Bug') {
		// Populate Issues at 600px
		let issuesCell = ''
		if (tablet) {
			issuesCell = <TableCell align="center">{row.issues}</TableCell>
		}
		let dateCreatedCell = ''
		if (desktop) {
			dateCreatedCell = (
				<TableCell align="center">
					{moment(row.dateCreated).format('MMM Do YY')}
				</TableCell>
			)
		}
		let assignedUser = 'none'
		if (row.user) {
			assignedUser = row.user.length > 0 ? row.user[0].userName : 'none'
		}
		return (
			<React.Fragment>
				<TableRow
					hover
					onClick={() => {
						row === selected ? setSelected({}) : setSelected(row)
						setRowCollapseOpen(!rowCollapseOpen)
					}}
					aria-checked={isItemSelected}
					selected={isItemSelected}
					sx={{
						'& > *': { borderBottom: 'unset' },
						'textDecoration': row.isActive ? 'none' : 'line-through',
						'backgroundColor': priorityBackground
					}}
				>
					<TableCell>
						<IconButton aria-label="expand row" size="small">
							{rowCollapseOpen ? (
								<KeyboardArrowUpIcon />
							) : (
								<KeyboardArrowDownIcon />
							)}
						</IconButton>
					</TableCell>
					<TableCell component="th" scope="row">
						{row.bugName}
					</TableCell>
					{issuesCell}
					<TableCell align="left">
						{moment(row.dateDue).format('MMM Do YY')}
					</TableCell>
					{dateCreatedCell}
					<TableCell align="right">{assignedUser}</TableCell>
				</TableRow>
				<TableRow selected={true}>
					<TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
						{tableControlls}
					</TableCell>
				</TableRow>
			</React.Fragment>
		)
	}
}

export default CharacterRow
