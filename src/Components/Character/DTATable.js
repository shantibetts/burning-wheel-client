import * as React from 'react'
import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import Paper from '@mui/material/Paper'
import { getCharacter } from './../Utils'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import IconButton from '@mui/material/IconButton'
import AddIcon from '@mui/icons-material/Add'
import DTARow from './DTARow'
import DTATableHead from './DTATableHead'
import SkillsLearningRow from './SkillsLearningRow'

const DTATable = (props) => {
	const { userData, setUserData, characterIndex, dense, setDense } = props

	let character = getCharacter(userData, characterIndex)
	// console.log(character, character.skillsLearning)

	const handleAddSkillDialogToggle = () => {}
	const handleAddSkillLearningDialogToggle = () => {}

	// States for controlling the Table

	return (
		<Paper sx={{ width: '100%', mb: 2 }}>
			{/* Table toolbar and Title */}
			<TableContainer>
				<Table
					stickyHeader
					sx={{ minWidth: 370 }}
					aria-labelledby="tableTitle"
					size={dense ? 'small' : 'medium'}
				>
					<DTATableHead dense={dense} setDense={setDense} />
					<TableBody>
						<TableRow>
							<TableCell />
							<TableCell className="titleRow" colSpan={10}>
								Stats
							</TableCell>
						</TableRow>
						{character.stats.map((row, i) => (
							<DTARow
								key={i}
								row={row}
								character={character}
								setUserData={setUserData}
							/>
						))}
						<TableRow />
						<TableRow>
							<TableCell />
							<TableCell className="titleRow" colSpan={10}>
								Attributes
							</TableCell>
						</TableRow>
						{character.attributes.map((row, i) => (
							<DTARow
								key={i}
								row={row}
								character={character}
								setUserData={setUserData}
							/>
						))}
						<TableRow />
						<TableRow className="titleRow">
							<TableCell>
								<IconButton onClick={handleAddSkillDialogToggle}>
									<AddIcon />
								</IconButton>
							</TableCell>
							<TableCell colSpan={10}>Skills</TableCell>
						</TableRow>
						{character.skills.map((row, i) => (
							<DTARow
								key={i}
								row={row}
								character={character}
								setUserData={setUserData}
							/>
						))}
						<TableRow className="titleRow">
							<TableCell>
								<IconButton onClick={handleAddSkillLearningDialogToggle}>
									<AddIcon />
								</IconButton>
							</TableCell>
							<TableCell colSpan={10}>Skills being learned</TableCell>
						</TableRow>
						{character.skillsLearning.map((row, i) => (
							<SkillsLearningRow
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

export default DTATable
