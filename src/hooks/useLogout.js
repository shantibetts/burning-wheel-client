import { useAuthContext } from './useAuthContext'
import { useCharactersContext } from './useCharactersContext'

export const useLogout = () => {
	const { dispatch } = useAuthContext()
	const { dispatch: CharactersDispatch } = useCharactersContext()

	const logout = () => {
		// remove user from storage
		localStorage.removeItem('user')
		localStorage.removeItem('characters')
		// dispatch logout action
		dispatch({ type: 'LOGOUT' })
		CharactersDispatch({ type: 'SET_CHARACTERS', payload: null })
	}

	return { logout }
}
