import noAvatar from '../images/no-avatar.png'

// Context
import { useDisplayContext } from '../hooks/useDisplayContext'
import { useCharactersContext } from '../hooks/useCharactersContext'

// MUI Components
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'

// Components
import DTATable from '../components/Character/DTATable'
import SNDTable from '../components/Character/SNDTable'
import CharacterDetails from '../components/Character/CharacterDetails'

const Character = () => {
	const { dense, displayDispatch } = useDisplayContext()
	const { character } = useCharactersContext()

	// Toggle dense padding
	const handleDenseToggle = () => {
		displayDispatch({ type: 'SET_DENSE', payload: !dense })
	}

	return (
		<div>
			<img
				className="portrait"
				src={character.portrait ? character.portrait : noAvatar}
				alt="A headshot of Shanti"
			/>
			<CharacterDetails />
			<SNDTable type="ND" attribute="beliefs" />
			<SNDTable type="ND" attribute="instincts" />
			<SNDTable type="NDC" attribute="traits" />
			<DTATable attribute="stats" />
			<DTATable attribute="attributes" />
			<DTATable attribute="skills" />
			<DTATable attribute="skillsLearning" />
			<SNDTable type="SND" attribute="relationships" />
			<SNDTable type="SND" attribute="affiliations" />
			<SNDTable type="SND" attribute="titles" />
			<SNDTable type="SND" attribute="funds" />
			<SNDTable type="ND" attribute="aliases" />
			<FormControlLabel
				control={<Switch checked={dense} onChange={handleDenseToggle} />}
				label="Dense padding"
			/>
		</div>
	)
}

export default Character
