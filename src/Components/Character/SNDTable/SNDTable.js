import * as React from 'react'
import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import Paper from '@mui/material/Paper'
import TableBody from '@mui/material/TableBody'
import { getCharacter, createEmptyTableData } from '../../Utils'
import SNDRow from './SNDRow'
import SNDTableHead from './SNDTableHead'
import TableToolbar from './../../TableToolbar'
import SNDForm from './SNDForm'

const SNDTable = (props) => {
	const { attribute, userData, setUserData, characterId, dense, setDense } =
		props

	// Printable title and add-description
	const title = attribute.charAt(0).toUpperCase() + attribute.slice(1)
	const addTitle = `Add new ${attribute}`

	// Get current character data
	let character = getCharacter(userData, characterId)
	// console.log(character, character.skillsLearning)

	// State for controlling the Dialogs
	const [SNDDialogOpen, setSNDDialogOpen] = React.useState(false)
	const [dialogData, setDialogData] = React.useState(createEmptyTableData())
	const [dialogType, setDialogType] = React.useState({
		attribute: '',
		type: ''
	})

	// Open and close the SND Form
	const handleSNDDialogToggle = () => {
		setSNDDialogOpen(!SNDDialogOpen)
	}

	return (
		<Paper sx={{ width: '100%', mb: 2 }}>
			{/* Table toolbar and Title */}
			<TableToolbar
				title={title}
				handleAdd={handleSNDDialogToggle}
				addTitle={addTitle}
			/>
			<TableContainer>
				<Table
					sx={{ minWidth: 370 }}
					aria-labelledby="tableTitle"
					size={dense ? 'small' : 'medium'}
				>
					<SNDTableHead dense={dense} setDense={setDense} />
					<TableBody>
						{character[`${attribute}`].map((row, i) => (
							<SNDRow
								key={i}
								row={row}
								character={character}
								setUserData={setUserData}
								SNDDialogOpen={SNDDialogOpen}
							/>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<SNDForm
				characterId={characterId}
				setDialogData={setDialogData}
				SNDDialogOpen={SNDDialogOpen}
				handleToggle={handleSNDDialogToggle}
				dialogType={dialogType}
				dialogData={dialogData}
				userData={userData}
				setUserData={setUserData}
				setDialogType={setDialogType}
			/>
		</Paper>
	)
}

export default SNDTable
