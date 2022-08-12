import { useState } from 'react'

// MUI Components
import Typography from '@mui/material/Typography'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'

// Components
import DTATable from '../components/Character/DTATAble/DTATable'
import SNDTable from '../components/Character/SNDTable/SNDTable'
import CharacterDetails from '../components/Character/CharacterDetails'

const Character = () => {
	// dummy state for dense - make context?
	const [dense, setDense] = useState(false)
	// State for API load error
	const [error, setError] = useState(null)

	// Error message
	const errorMessage = (
		<div>
			<Typography variant="h2" sx={{ py: 3 }}>
				Error
			</Typography>
			<Typography variant="body1" sx={{ pt: 2, pb: 4 }}>
				{error}
			</Typography>
		</div>
	)

	return (
		<div>
			<CharacterDetails />
			<SNDTable type={'ND'} attribute="beliefs" characterId={characterId} />
			<SNDTable type={'ND'} attribute="instincts" />
			<SNDTable type={'NDC'} attribute="traits" />
			<DTATable attribute={'stats'} />
			<DTATable attribute={'attributes'} />
			<DTATable attribute={'skills'} />
			<DTATable attribute={'skillsLearning'} />
			<SNDTable type={'SND'} attribute="relationships" />
			<SNDTable type={'SND'} attribute="affiliations" />
			<SNDTable type={'SND'} attribute="titles" />
			<SNDTable type={'SND'} attribute="funds" />
			<SNDTable type={'ND'} attribute="aliases" />
			<FormControlLabel
				control={<Switch checked={dense} onChange={setDense(!dense)} />}
				label="Dense padding"
			/>
			{error && errorMessage}
		</div>
	)
}

export default Character
