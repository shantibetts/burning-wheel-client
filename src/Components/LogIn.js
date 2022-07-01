import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { fetchUser, nullUser } from './Utils'
import { useNavigate } from 'react-router-dom'
import { GoogleLogin } from '@react-oauth/google'

const LogIn = (props) => {
	const { tablet, desktop, userData, setUserData } = props

	const navigate = useNavigate()

	// Log In Error message
	let errorMessage = ''

	// Logs user in and fetches user data and sets user state
	const handleLogIn = () => {
		// Display loading dial

		// Get log-in data from google

		// Fetch user info
		errorMessage = fetchUser(setUserData, 'SBetts', navigate)
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
			<GoogleLogin
				onSuccess={(credentialResponse) => {
					if (credentialResponse.credential) {
						let newUser = nullUser()
						newUser.token = credentialResponse.credential
						setUserData(newUser)
						console.log(newUser)
					} else {
						errorMessage = 'Log in did not return a user credential'
					}
				}}
				onError={() => {
					console.log('Login Failed')
				}}
			/>

			<Typography variant="body1" sx={{ pt: 2, pb: 4 }}>
				{errorMessage}
			</Typography>
		</div>
	)
}

export default LogIn
