import * as React from 'react'
import Typography from '@mui/material/Typography'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import { getCharacter, handleChangeDense } from '../components/Utils'
import DTATable from '../components/Character/DTATAble/DTATable'
import SNDTable from '../components/Character/SNDTable/SNDTable'
import CharacterDetails from '../components/Character/CharacterDetails'
import Button from '@mui/material/Button'
import { Link as RouterLink } from 'react-router-dom'

const Character = (props) => {
	const { userData, setUserData, characterId, dense, setDense } = props

	// Open dialog to add a new character
	const handleAddCharacterDialogToggle = () => {}

	if (userData !== null && characterId !== null) {
		return (
			<div>
				<CharacterDetails
					userData={userData}
					setUserData={setUserData}
					characterId={characterId}
				/>
				<SNDTable
					type={'ND'}
					attribute="beliefs"
					userData={userData}
					setUserData={setUserData}
					characterId={characterId}
					dense={dense}
					setDense={setDense}
				/>
				<SNDTable
					type={'ND'}
					attribute="instincts"
					userData={userData}
					setUserData={setUserData}
					characterId={characterId}
					dense={dense}
					setDense={setDense}
				/>
				<SNDTable
					type={'NDC'}
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
					type={'SND'}
					attribute="relationships"
					userData={userData}
					setUserData={setUserData}
					characterId={characterId}
					dense={dense}
					setDense={setDense}
				/>
				<SNDTable
					type={'SND'}
					attribute="affiliations"
					userData={userData}
					setUserData={setUserData}
					characterId={characterId}
					dense={dense}
					setDense={setDense}
				/>
				<SNDTable
					type={'SND'}
					attribute="titles"
					userData={userData}
					setUserData={setUserData}
					characterId={characterId}
					dense={dense}
					setDense={setDense}
				/>
				<SNDTable
					type={'SND'}
					attribute="funds"
					userData={userData}
					setUserData={setUserData}
					characterId={characterId}
					dense={dense}
					setDense={setDense}
				/>
				<SNDTable
					type={'ND'}
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
				<Button component={RouterLink} to="/">
					Home
				</Button>
			</div>
		)
	}
}

export default Character
