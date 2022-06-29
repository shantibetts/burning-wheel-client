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
	const { userData, setUserData, characterIndex, dense, setDense } = props

	// Open dialog to add a new character
	const handleAddCharacterDialogToggle = () => {}

	if (getCharacter(userData, characterIndex) !== null) {
		return (
			<div>
				<CharacterDetails
					userData={userData}
					setUserData={setUserData}
					characterIndex={characterIndex}
				/>
				<NDTable
					tableType="beliefs"
					userData={userData}
					setUserData={setUserData}
					characterIndex={characterIndex}
					dense={dense}
					setDense={setDense}
				/>
				<NDTable
					tableType="instincts"
					userData={userData}
					setUserData={setUserData}
					characterIndex={characterIndex}
					dense={dense}
					setDense={setDense}
				/>
				<NDTable
					tableType="traits"
					userData={userData}
					setUserData={setUserData}
					characterIndex={characterIndex}
					dense={dense}
					setDense={setDense}
				/>
				<DTATable
					userData={userData}
					setUserData={setUserData}
					characterIndex={characterIndex}
					dense={dense}
					setDense={setDense}
				/>
				<SNDTable
					tableType="relationships"
					userData={userData}
					setUserData={setUserData}
					characterIndex={characterIndex}
					dense={dense}
					setDense={setDense}
				/>
				<SNDTable
					tableType="affiliations"
					userData={userData}
					setUserData={setUserData}
					characterIndex={characterIndex}
					dense={dense}
					setDense={setDense}
				/>
				<SNDTable
					tableType="titles"
					userData={userData}
					setUserData={setUserData}
					characterIndex={characterIndex}
					dense={dense}
					setDense={setDense}
				/>
				<SNDTable
					tableType="funds"
					userData={userData}
					setUserData={setUserData}
					characterIndex={characterIndex}
					dense={dense}
					setDense={setDense}
				/>
				<NDTable
					tableType="aliases"
					userData={userData}
					setUserData={setUserData}
					characterIndex={characterIndex}
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
