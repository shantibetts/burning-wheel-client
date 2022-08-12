import { createContext, useReducer, useEffect } from 'react'

// DisplayContext exported to be available to any children of App
export const DisplayContext = createContext()

// DisplayReducer sets state based on switch function
export const displayReducer = (state, action) => {
	const newState = { ...state }
	switch (action.type) {
		case 'SET_DENSE':
			const { dense } = action.payload
			newState.dense = dense
			return newState
		default:
			return state
	}
}

// DisplayContextProvider provides Display Context to all children (of app)
export const DisplayContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(displayReducer, {
		dense: true
	})

	useEffect(() => {
		// check local storage for any users
		const user = JSON.parse(localStorage.getItem('user'))
		// if user is present, run login dispatch to log them in
		if (user) {
			dispatch({ type: 'LOGIN', payload: user })
		}
	}, [])

	return (
		<DisplayContext.Provider value={{ ...state, dispatch }}>
			{children}
		</DisplayContext.Provider>
	)
}
