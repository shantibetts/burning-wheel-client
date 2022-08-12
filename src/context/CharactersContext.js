import { createContext, useReducer, useEffect } from 'react'

export const CharactersContext = createContext()

export const charactersReducer = (state, action) => {
	const newState = { ...state }
	switch (action.type) {
		case 'SET_CHARACTER_LIST':
			newState.characterList = action.payload
			return newState
		case 'CREATE_CHARACTER':
			newState.characters = [action.payload, ...state.characterList]
			return newState
		case 'DELETE_CHARACTER':
			newState.characterList = state.characterList.filter(
				(character) => character._id !== action.payload._id
			)
			return newState
		case 'SET_CHARACTER':
			newState.character = action.payload
			return newState
		default:
			return state
	}
}

export const CharactersContextProvider = ({ children }) => {
	const [state, charactersDispatch] = useReducer(charactersReducer, {
		characterList: null,
		character: null
	})

	useEffect(() => {
		// on page load, check to see if characters are present in local storage
		const characters = JSON.parse(localStorage.getItem('characters'))
		// if characters are present, use charactersDispatch to set characters
		if (characters) {
			charactersDispatch({
				type: 'SET_CHARACTER_LIST',
				payload: characters.characterList
			})
		}
	}, [])

	return (
		<CharactersContext.Provider value={{ ...state, charactersDispatch }}>
			{children}
		</CharactersContext.Provider>
	)
}
