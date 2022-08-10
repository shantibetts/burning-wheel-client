import { createContext, useReducer, useEffect } from 'react'

export const CharactersContext = createContext()

export const charactersReducer = (state, action) => {
	switch (action.type) {
		case 'SET_CHARACTERS':
			return {
				characters: action.payload
			}
		case 'CREATE_CHARACTER':
			return {
				characters: [action.payload, ...state.characters]
			}
		case 'DELETE_CHARACTER':
			return {
				characters: state.characters.filter(
					(character) => character._id !== action.payload._id
				)
			}
		default:
			return state
	}
}

export const CharactersContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(charactersReducer, {
		characters: null
	})

	useEffect(() => {
		// on page load, check to see if characters are present in local storage
		const characters = JSON.parse(localStorage.getItem('characters'))
		// if characters are present, use dispatch to set characters
		if (characters) {
			dispatch({ type: 'SET_CHARACTERS', payload: characters })
		}
	}, [])

	return (
		<CharactersContext.Provider value={{ ...state, dispatch }}>
			{children}
		</CharactersContext.Provider>
	)
}
