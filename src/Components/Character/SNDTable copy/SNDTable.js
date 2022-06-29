import * as React from 'react'
import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import Paper from '@mui/material/Paper'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import IconButton from '@mui/material/IconButton'
import AddIcon from '@mui/icons-material/Add'
import { getCharacter } from '../../Utils'
import SNDRow from './SNDRow'
import SNDTableHead from './SNDTableHead'
import TableToolbar from '../../TableToolbar'

const SNDTable = (props) => {
	const { tableType, userData, setUserData, characterIndex, dense, setDense } =
		props

	// Printable title and add-description
	const title = tableType.charAt(0).toUpperCase() + tableType.slice(1)
	const addTitle = `Add new ${tableType}`

	// Get current character data
	let character = getCharacter(userData, characterIndex)
	// console.log(character, character.skillsLearning)

	// Open dialog to add a new character
	const handleAddCharacterDialogToggle = () => {}
	const handleAddSkillDialogToggle = () => {}
	const handleAddSkillLearningDialogToggle = () => {}

	// States for controlling the Table

	return (
		<Paper sx={{ width: '100%', mb: 2 }}>
			{/* Table toolbar and Title */}
			<TableToolbar
				title={title}
				handleAdd={handleAddCharacterDialogToggle}
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
						{character[`${tableType}`].map((row, i) => (
							<SNDRow
								key={i}
								row={row}
								character={character}
								setUserData={setUserData}
							/>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Paper>
	)
}

export default SNDTable
