import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { handleLogOut } from './Utils'
import { useNavigate } from 'react-router-dom'
import apiUrl from '../apiUrl'
// import { GoogleLogin } from '@react-oauth/google'
import axios from 'axios'

const LogIn = (props) => {
	const { tablet, desktop, userData, setUserData } = props

	const navigate = useNavigate()

	const handleLogInChange = (event, attribute) => {
		const newData = { ...userData }
		newData[attribute] = event.target.value
		setUserData(newData)
	}

	// Log In Error message
	let errorMessage = ''

	// Logs user in and fetches user data and sets user state
	const handleLogIn = () => {
		let userAndPass = { email: userData.email, password: userData.password }
		axios
			.post(apiUrl + `/login/`, userAndPass)
			.then((res) => {
				if (res.status === 200) {
					console.log(res.data.user)
					let newUser = res.data.user
					newUser.loggedIn = true
					setUserData(newUser)
					navigate('/user/' + newUser.name)
				}
				errorMessage = 'something went wrong'
			})
			.catch((err) => {
				console.log('something went wrong', err)
				errorMessage = 'something went wrong' + err
			})
	}

	const logInForm = (
		<div className="logInForm">
			<TextField
				required={true}
				name="email"
				type="email"
				label="email"
				value={userData.email}
				variant="outlined"
				onChange={(event) => handleLogInChange(event, 'email')}
			/>
			<TextField
				required={true}
				ame="password"
				type="password"
				label="password"
				value={userData.password}
				variant="outlined"
				onChange={(event) => handleLogInChange(event, 'password')}
			/>
			<Button
				size="medium"
				variant="outlined"
				sx={{ m: 1 }}
				onClick={handleLogIn}
			>
				Log in
			</Button>
		</div>
	)

	const logOutButton = (
		<Button
			size="medium"
			variant="outlined"
			sx={{ m: 1 }}
			onClick={handleLogOut}
		>
			Log out
		</Button>
	)

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
			{userData.loggedIn ? logOutButton : logInForm}
			{/* <GoogleLogin
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
			/> */}
			<Typography variant="body1" sx={{ pt: 2, pb: 4 }}>
				{errorMessage}
			</Typography>
		</div>
	)
}

export default LogIn
