import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import apiUrl from '../apiUrl'

const Home = (props) => {
	const { tablet, desktop, setUserData, setIsLoggedIn } = props
	// Log In Error message
	let errorMessage = ''

	// Logs user in and fetches user data and sets user state
	const handleLogIn = () => {
		// Display loading dial

		// Get log-in data from google

		// Temporary hardcode user-name
		let userName = 'Sbetts'

		// Fetch user info
		fetch(apiUrl + `/users/username/` + userName)
			.then((res) => res.json())
			.then((data) => {
				setUserData(data.user)
			})
			.then(() => {
				// navigate to '/:user'
			})
			.catch((err) => {
				errorMessage = 'something went wrong' + err
				console.log('something went wrong', err)
			})
	}

	return (
		<div className="home">
			<Typography variant="h2" sx={{ py: 3 }}>
				Welcome!
			</Typography>
			<Typography variant="body1" sx={{ pt: 2, pb: 4 }}>
				The unoficial, online Burning Wheel Gold (+Codex) character sheet.
				Adapted from the Burning Wheel character sheet PDFs included with
				Burning Wheel Gold.
			</Typography>
			<Typography variant="body1" sx={{ pt: 2, pb: 4 }}>
				Please log in to continue
			</Typography>
			<Button
				href={'#'}
				size="medium"
				variant="outlined"
				sx={{ m: 1 }}
				onClick={handleLogIn}
			>
				Log in with Google
			</Button>
			<Typography variant="body1" sx={{ pt: 2, pb: 4 }}>
				{errorMessage}
			</Typography>
		</div>
	)
}

export default Home
