import { useState } from 'react'
import { useCharactersContext } from './useCharactersContext'
import { useAuthContext } from './useAuthContext'

export const useAttributeUpdate = () => {
	const [error, setError] = useState(null)
	const [isLoading, setIsLoading] = useState(null)
	const { user } = useAuthContext()

	const { character, charactersDispatch } = useCharactersContext()

	const attributeUpdate = async (update) => {
		// set initial state - currently loading and no error
		setIsLoading(true)
		setError(null)

		// make signup request
		const response = await fetch('/api/characters/' + character._id, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${user.token}`
			},
			body: JSON.stringify(update)
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
			console.log(json)
			// update characters context
			charactersDispatch({ type: 'ATTRIBUTE_UPDATE', payload: json.character })
			setIsLoading(false)
		}
	}

	return { attributeUpdate, isLoading, error }
}
