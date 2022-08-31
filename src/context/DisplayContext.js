import { createContext, useReducer, useEffect } from 'react'

// MUI Components
import useMediaQuery from '@mui/material/useMediaQuery'

// DisplayContext exported to be available to any children of App
export const DisplayContext = createContext()

// DisplayReducer sets state based on switch function
export const displayReducer = (state, action) => {
	const newState = { ...state }
	switch (action.type) {
		case 'SET_DENSE':
			newState.dense = action.payload
			return newState
		default:
			return state
	}
}

// DisplayContextProvider provides Display Context to all children (of app)
export const DisplayContextProvider = ({ children }) => {
	const [state, displayDispatch] = useReducer(displayReducer, {
		dense: true
	})

	// Media queries to set width
	let tablet = useMediaQuery('(min-width:600px)')
	let desktop = useMediaQuery('(min-width:900px)')

	useEffect(() => {
		if (tablet || desktop) {
			displayDispatch({ type: 'SET_DENSE', payload: false })
		}
	}, [])

	return (
		<DisplayContext.Provider value={{ ...state, displayDispatch }}>
			{children}
		</DisplayContext.Provider>
	)
}
