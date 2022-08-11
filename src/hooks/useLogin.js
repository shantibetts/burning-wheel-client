import { useState } from 'react'
import { useAuthContext } from './../hooks/useAuthContext'

export const useLogin = () => {
	const [error, setError] = useState(null)
	const [isLoading, setIsLoading] = useState(null)

	const { dispatch } = useAuthContext()

	const login = async (email, password) => {
		// set initial state for new signup - currently loading and no error
		setIsLoading(true)
		setError(null)
		console.log('log in starting for ', email, password)

		// make signup request
		const response = await fetch('/api/user/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email, password })
		})
		// translate from JSON
		const json = await response.json()

		// Response is error:
		if (!response.ok) {
			setIsLoading(false)
			setError(json.error)
		}
		// Response is valid:
		if (response.ok) {
			// save user to local storage
			localStorage.setItem('user', JSON.stringify(json))
			// update user context for auth context
			dispatch({ type: 'LOGIN', payload: json })
			setIsLoading(false)
		}
	}

	return { login, isLoading, error }
}
