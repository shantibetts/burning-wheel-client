import * as React from 'react'
import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import Paper from '@mui/material/Paper'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import { getCharacter, createEmptyTableData } from './../../Utils'
import DTARow from './DTARow'
import DTATableHead from './DTATableHead'
import DTAForm from './DTAForm'

const DTATable = (props) => {
	const { attribute, userData, setUserData, characterId, dense, setDense } =
		props

	// Create character from userData
	let character = getCharacter(userData, characterId)[attribute]

	// State for controlling the Dialogs
	const [dialogOpen, setDialogOpen] = React.useState(false)
	const [dialogData, setDialogData] = React.useState(createEmptyTableData())
	const [dialogType, setDialogType] = React.useState('')

	// Open and close the DTA Form
	const handleDialogToggle = () => {
		setDialogOpen(!dialogOpen)
	}

	// Title for table and add new button
	let displayTitle = attribute.charAt(0).toUpperCase() + attribute.slice(1)
	let tooltip = 'Add new ' + attribute.slice(0, -1)
	if (attribute === 'skillsLearning') {
		tooltip = 'Add new skill'
		displayTitle = 'Skills Being Learned'
	}

	return (
		<Paper sx={{ width: '100%', mb: 2 }}>
			<Typography
				sx={{ flex: '1 1 100%' }}
				variant="h6"
				id="tableTitle"
				component="div"
			>
				{displayTitle}
			</Typography>
			<TableContainer>
				<Table
					sx={{ minWidth: 370 }}
					aria-labelledby="tableTitle"
					size={dense ? 'small' : 'medium'}
				>
					<DTATableHead
						attribute={attribute}
						tooltip={tooltip}
						handleDialogToggle={handleDialogToggle}
						dense={dense}
						setDense={setDense}
					/>
					<TableBody>
						{character.map((row, i) => (
							<DTARow
								key={i}
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
			<DTAForm
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

export default DTATable
