import * as React from 'react'
import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import Paper from '@mui/material/Paper'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import IconButton from '@mui/material/IconButton'
import AddIcon from '@mui/icons-material/Add'
import { getCharacter, createDTAData } from './../../Utils'
import DTARow from './DTARow'
import DTATableHead from './DTATableHead'
import SkillsLearningRow from './SkillsLearningRow'
import DTAForm from './DTAForm'

const DTATable = (props) => {
	const { userData, setUserData, characterIndex, dense, setDense } = props

	// Create character from userData
	let character = getCharacter(userData, characterIndex)
	// Create empty dialogData
	const emptyDialogData = createDTAData('', '', '', '', '', '', '', '', '', '')

	// State for controlling the Dialogs
	const [DTADialogOpen, setDTADialogOpen] = React.useState(false)
	const [dialogData, setDialogData] = React.useState(emptyDialogData)
	const [dialogType, setDialogType] = React.useState({ title: '', type: '' })

	// Open and close the DTA Form
	const handleDTADialogToggle = () => {
		setDTADialogOpen(!DTADialogOpen)
	}

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
								title={'stat'}
								row={row}
								character={character}
								setUserData={setUserData}
								handleDTADialogToggle={handleDTADialogToggle}
								setDialogData={setDialogData}
								setDialogType={setDialogType}
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
								title={'attribute'}
								row={row}
								character={character}
								setUserData={setUserData}
								handleDTADialogToggle={handleDTADialogToggle}
								setDialogData={setDialogData}
								setDialogType={setDialogType}
							/>
						))}
						<TableRow />
						<TableRow className="titleRow">
							<TableCell>
								<IconButton
									onClick={() => {
										handleDTADialogToggle()
										setDialogData(emptyDialogData)
										setDialogType({ title: 'skill', type: 'new' })
									}}
								>
									<AddIcon />
								</IconButton>
							</TableCell>
							<TableCell colSpan={10}>Skills</TableCell>
						</TableRow>
						{character.skills.map((row, i) => (
							<DTARow
								key={i}
								title={'skill'}
								row={row}
								character={character}
								setUserData={setUserData}
								handleDTADialogToggle={handleDTADialogToggle}
								setDialogData={setDialogData}
								setDialogType={setDialogType}
							/>
						))}
						<TableRow className="titleRow">
							<TableCell>
								<IconButton
									onClick={() => {
										handleDTADialogToggle()
										setDialogData(emptyDialogData)
										setDialogType({ title: 'skill being learned', type: 'new' })
									}}
								>
									<AddIcon />
								</IconButton>
							</TableCell>
							<TableCell colSpan={10}>Skills being learned</TableCell>
						</TableRow>
						{character.skillsLearning.map((row, i) => (
							<SkillsLearningRow
								key={i}
								title={'skill being learned'}
								row={row}
								character={character}
								setUserData={setUserData}
								handleDTADialogToggle={handleDTADialogToggle}
								setDialogData={setDialogData}
								setDialogType={setDialogType}
							/>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<DTAForm
				setDialogData={setDialogData}
				DTADialogOpen={DTADialogOpen}
				handleToggle={handleDTADialogToggle}
				dialogType={dialogType}
				dialogData={dialogData}
				setUserData={setUserData}
				setDialogType={setDialogType}
			/>
		</Paper>
	)
}

export default DTATable
