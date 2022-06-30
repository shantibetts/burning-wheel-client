import * as React from 'react'
import Typography from '@mui/material/Typography'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import { getCharacter, handleChangeDense } from './../Utils'
import DTATable from './DTATAble/DTATable'
import SNDTable from './SNDTable/SNDTable'
import NDTable from './NDTable/NDTable'
import CharacterDetails from './CharacterDetails'

const Character = (props) => {
	const { userData, setUserData, characterId, dense, setDense } = props

	// Open dialog to add a new character
	const handleAddCharacterDialogToggle = () => {}

	if (getCharacter(userData, characterId) !== null) {
		return (
			<div>
				<CharacterDetails
					userData={userData}
					setUserData={setUserData}
					characterId={characterId}
				/>
				<NDTable
					attribute="beliefs"
					userData={userData}
					setUserData={setUserData}
					characterId={characterId}
					dense={dense}
					setDense={setDense}
				/>
				<NDTable
					attribute="instincts"
					userData={userData}
					setUserData={setUserData}
					characterId={characterId}
					dense={dense}
					setDense={setDense}
				/>
				<NDTable
					attribute="traits"
					userData={userData}
					setUserData={setUserData}
					characterId={characterId}
					dense={dense}
					setDense={setDense}
				/>
				<DTATable
					attribute={'stats'}
					userData={userData}
					setUserData={setUserData}
					characterId={characterId}
					dense={dense}
					setDense={setDense}
				/>
				<DTATable
					attribute={'attributes'}
					userData={userData}
					setUserData={setUserData}
					characterId={characterId}
					dense={dense}
					setDense={setDense}
				/>
				<DTATable
					attribute={'skills'}
					userData={userData}
					setUserData={setUserData}
					characterId={characterId}
					dense={dense}
					setDense={setDense}
				/>
				<DTATable
					attribute={'skillsLearning'}
					userData={userData}
					setUserData={setUserData}
					characterId={characterId}
					dense={dense}
					setDense={setDense}
				/>
				<SNDTable
					attribute="relationships"
					userData={userData}
					setUserData={setUserData}
					characterId={characterId}
					dense={dense}
					setDense={setDense}
				/>
				<SNDTable
					attribute="affiliations"
					userData={userData}
					setUserData={setUserData}
					characterId={characterId}
					dense={dense}
					setDense={setDense}
				/>
				<SNDTable
					attribute="titles"
					userData={userData}
					setUserData={setUserData}
					characterId={characterId}
					dense={dense}
					setDense={setDense}
				/>
				<SNDTable
					attribute="funds"
					userData={userData}
					setUserData={setUserData}
					characterId={characterId}
					dense={dense}
					setDense={setDense}
				/>
				<NDTable
					attribute="aliases"
					userData={userData}
					setUserData={setUserData}
					characterId={characterId}
					dense={dense}
					setDense={setDense}
				/>
				<FormControlLabel
					control={
						<Switch
							checked={dense}
							onChange={() => handleChangeDense(dense, setDense)}
						/>
					}
					label="Dense padding"
				/>
			</div>
		)
	} else {
		return (
			<div>
				<Typography variant="h2" sx={{ py: 3 }}>
					Oops!
				</Typography>
				<Typography variant="body1" sx={{ pt: 2, pb: 4 }}>
					Something went wrong! Please report this bug.
				</Typography>
			</div>
		)
	}
}

export default Character
