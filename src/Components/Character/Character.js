import * as React from 'react'
import Typography from '@mui/material/Typography'
import { getCharacter } from './../Utils'
import DTATable from './DTATable'

const Character = (props) => {
	const { tablet, desktop, userData, setUserData, characterIndex } = props

	// Open dialog to add a new character
	const handleAddCharacterDialogToggle = () => {}

	if (getCharacter(userData, characterIndex) !== null) {
		return (
			<div>
				<DTATable
					userData={userData}
					setUserData={setUserData}
					characterIndex={characterIndex}
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
