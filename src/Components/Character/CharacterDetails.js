// Context
import { useCharactersContext } from './../../hooks/useCharactersContext'

// MUI Components
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

const CharacterDetails = () => {
	const { character } = useCharactersContext()

	// Turn lifepath names into a string
	const lifepathArr = character.lifepaths.map((lifepath) => lifepath.name)
	const lifepaths = lifepathArr.join(', ')

	return (
		<Paper>
			<Typography variant="body1">Stock: {character.stock}</Typography>
			<Typography variant="body1">Age: {character.age}</Typography>
			<Typography variant="body1">Lifepaths: {lifepaths}</Typography>
			<Typography variant="h6">Artha</Typography>
			<Typography variant="body1">Fate: {character.artha[0]}</Typography>
			<Typography variant="body1">Persona: {character.artha[1]}</Typography>
			<Typography variant="body1">Deeds: {character.artha[2]}</Typography>
		</Paper>
	)
}

export default CharacterDetails
