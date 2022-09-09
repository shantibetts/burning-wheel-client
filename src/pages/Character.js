// Context
import { useDisplayContext } from '../hooks/useDisplayContext'
import { useFormContext } from '../hooks/useFormContext'

// MUI Components
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'

// Components
import DTATable from '../Components/Character/DTATable'
import SNDTable from '../Components/Character/SNDTable'
import CharacterDetails from '../Components/Character/CharacterDetails'
import AttributeForm from '../Components/Character/AttributeForm'

const Character = () => {
	const { dense, displayDispatch } = useDisplayContext()
	const { formOpen } = useFormContext()

	// Toggle dense padding
	const handleDenseToggle = () => {
		displayDispatch({ type: 'SET_DENSE', payload: !dense })
	}

	return (
		<div>
			<CharacterDetails />
			<SNDTable attribute="beliefs" />
			<SNDTable attribute="instincts" />
			<SNDTable attribute="traits" />
			<DTATable attribute="stats" />
			<DTATable attribute="attributes" />
			<DTATable attribute="skills" />
			<DTATable attribute="skillsLearning" />
			<SNDTable attribute="relationships" />
			<SNDTable attribute="affiliations" />
			<SNDTable attribute="titles" />
			<SNDTable attribute="funds" />
			<SNDTable attribute="aliases" />
			<FormControlLabel
				control={<Switch checked={dense} onChange={handleDenseToggle} />}
				label="Dense padding"
			/>
			<AttributeForm />
		</div>
	)
}

export default Character
