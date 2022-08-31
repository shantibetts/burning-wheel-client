import { createContext, useReducer, useEffect } from 'react'

// AuthContext exported to be available to any children of App
export const AuthContext = createContext()

// AuthReducer sets state based on switch function
export const authReducer = (state, action) => {
	const newState = { ...state }
	switch (action.type) {
		case 'LOGIN':
			newState.user = action.payload
			return newState
		case 'LOGOUT':
			newState.user = null
			return newState
		default:
			return state
	}
}

// AuthContextProvider provides Auth Context to all children (of app)
export const AuthContextProvider = ({ children }) => {
	const [state, authDispatch] = useReducer(authReducer, {
		user: null
	})

	useEffect(() => {
		// check local storage for any users
		const user = JSON.parse(localStorage.getItem('user'))
		// if user is present, run login authDispatch to log them in
		if (user) {
			authDispatch({ type: 'LOGIN', payload: user })
		}
	}, [])

	return (
		<AuthContext.Provider value={{ ...state, authDispatch }}>
			{children}
		</AuthContext.Provider>
	)
}
