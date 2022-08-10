import { useAuthContext } from './useAuthContext'
import { useCharactersContext } from './useCharactersContext'

export const useLogout = () => {
	const { dispatch } = useAuthContext()
	const { dispatch: workoutsDispatch } = useCharactersContext()

	const logout = () => {
		// remove user from storage
		localStorage.removeItem('user')
		// dispatch logout action
		dispatch({ type: 'LOGOUT' })
		workoutsDispatch({ type: 'SET_WORKOUTS', payload: null })
	}

	return { logout }
}
