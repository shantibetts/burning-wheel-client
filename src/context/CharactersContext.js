import { createContext, useReducer, useEffect } from 'react'

export const CharactersContext = createContext()

export const charactersReducer = (state, action) => {
	const newState = { ...state }
	switch (action.type) {
		case 'SET_CHARACTERS':
			const { characters } = action.payload
			newState.characters = characters
			return newState
		case 'CREATE_CHARACTER':
			const { character } = action.payload
			newState.characters = [character, ...state.characters]
			return newState
		case 'DELETE_CHARACTER':
			newState.characters = state.characters.filter(
				(character) => character._id !== action.payload._id
			)
			return newState
		case 'SET_CURRENT_CHARACTER':
			const { characterId } = action.payload
			newState.characterId = characterId
			return newState
		default:
			return state
	}
}

export const CharactersContextProvider = ({ children }) => {
	const [state, charactersDispatch] = useReducer(charactersReducer, {
		characters: null,
		currentCharacter: null
	})

	useEffect(() => {
		// on page load, check to see if characters are present in local storage
		const characters = JSON.parse(localStorage.getItem('characters'))
		// if characters are present, use charactersDispatch to set characters
		if (characters) {
			charactersDispatch({ type: 'SET_CHARACTERS', payload: characters })
		}
	}, [])

	return (
		<CharactersContext.Provider value={{ ...state, charactersDispatch }}>
			{children}
		</CharactersContext.Provider>
	)
}
