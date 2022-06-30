import * as React from 'react'
import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import Paper from '@mui/material/Paper'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import { getCharacter, createEmptyTableData } from '../../Utils'
import SNDRow from './SNDRow'
import SNDTableHead from './SNDTableHead'
import SNDForm from './SNDForm'
import TableToolbar from '../../TableToolbar'

const SNDTable = (props) => {
	const {
		type,
		attribute,
		userData,
		setUserData,
		characterId,
		dense,
		setDense
	} = props

	// Create character from userData
	let character = getCharacter(userData, characterId)[attribute]

	// Create title from attribute
	const title = attribute.charAt(0).toUpperCase() + attribute.slice(1)

	// State for controlling the Dialogs
	const [dialogOpen, setDialogOpen] = React.useState(false)
	const [dialogData, setDialogData] = React.useState(createEmptyTableData())
	const [dialogType, setDialogType] = React.useState('')

	// Open and close the SND Form
	const handleDialogToggle = () => {
		setDialogOpen(!dialogOpen)
	}

	return (
		<Paper sx={{ width: '100%', mb: 2 }}>
			{/* Table toolbar and Title */}
			<TableContainer>
				<TableToolbar
					attribute={attribute}
					title={title}
					handleAdd={handleDialogToggle}
				/>
				<Table
					sx={{ minWidth: 370 }}
					aria-labelledby="tableTitle"
					size={dense ? 'small' : 'medium'}
				>
					<SNDTableHead type={type} dense={dense} setDense={setDense} />
					<TableBody>
						{character.map((row, i) => (
							<SNDRow
								key={i}
								type={type}
								attribute={attribute}
								row={row}
								character={character}
								setUserData={setUserData}
								handleDialogToggle={handleDialogToggle}
								setDialogData={setDialogData}
								setDialogType={setDialogType}
							/>
						))}
						<TableRow />
					</TableBody>
				</Table>
			</TableContainer>
			<SNDForm
				attribute={attribute}
				characterId={characterId}
				dialogOpen={dialogOpen}
				handleToggle={handleDialogToggle}
				dialogType={dialogType}
				setDialogType={setDialogType}
				dialogData={dialogData}
				setDialogData={setDialogData}
				userData={userData}
				setUserData={setUserData}
			/>
		</Paper>
	)
}

export default SNDTable
