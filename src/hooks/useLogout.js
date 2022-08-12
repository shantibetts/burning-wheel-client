import { useAuthContext } from './useAuthContext'
import { useCharactersContext } from './useCharactersContext'

export const useLogout = () => {
	const { authDispatch } = useAuthContext()
	const { charactersDispatch } = useCharactersContext()

	const logout = () => {
		// remove user from storage
		localStorage.removeItem('user')
		localStorage.removeItem('characters')
		// dispatch logout actions
		authDispatch({ type: 'LOGOUT' })
		charactersDispatch({ type: 'SET_CHARACTERS', payload: null })
	}

	return { logout }
}
