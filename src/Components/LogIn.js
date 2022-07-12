import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { handleLogOut } from './Utils'
import { useNavigate } from 'react-router-dom'
import apiUrl from '../apiUrl'
import { GoogleLogin } from '@react-oauth/google'
import axios from 'axios'
// import { useCookies } from 'react-cookie'

const LogIn = (props) => {
	const { tablet, desktop, userData, setUserData } = props

	// const [cookies, setCookie, removeCookie] = useCookies([
	// 	'https://accounts.google.com'
	// ])

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
		axios
			.post(apiUrl + `/auth/local/`, {
				email: userData.email,
				password: userData.password,
				withCredentials: true
			})
			.then((res) => {
				if (res.status === 200) {
					console.log(res)
					let newUser = res.data.userData
					newUser.loggedIn = true
					setUserData(newUser)
					// navigate('/user/' + newUser.name)
					// navigate('/')
				} else {
					errorMessage = 'something went wrong'
				}
			})
			.catch((err) => {
				console.log('something went wrong', err)
				errorMessage = 'something went wrong' + err
			})
	}

	// logs user in with google OAuth
	const handleGoogleLogIn = () => {
		const newUser = { ...userData }
		userData.loggedIn = true
		setUserData(newUser)
		window.open('http://localhost:8080/auth/google', '_self')
	}

	// fetches userData
	const handleUserFetch = () => {
		axios
			.get(apiUrl + `/users/login/`, { withCredentials: true })
			.then((res) => {
				if (res.status === 200) {
					const newUser = res.data.user
					newUser.loggedIn = true
					console.log(newUser)
					setUserData(newUser)
				} else {
					throw new Error('authentication has failed')
				}
			})
			.catch((err) => {
				console.log('something went wrong', err)
				errorMessage = 'something went wrong' + err
			})
	}

	const logIn = (
		<div className="logIn">
			<Typography variant="h5" sx={{ pt: 2, pb: 4 }}>
				Please log in to continue
			</Typography>
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
			<Button
				size="medium"
				variant="outlined"
				sx={{ m: 1 }}
				onClick={handleGoogleLogIn}
			>
				Log in with Google
			</Button>
			<Button
				size="medium"
				variant="outlined"
				sx={{ m: 1 }}
				onClick={handleUserFetch}
			>
				Fetch user data
			</Button>
		</div>
	)

	const logOut = (
		<Button
			size="medium"
			variant="outlined"
			sx={{ m: 1 }}
			onClick={() => handleLogOut(userData.user, setUserData, navigate)}
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
			<Typography variant="h5" sx={{ pt: 4, pb: 2 }}>
				Under Development!
			</Typography>
			<Typography variant="body1" sx={{ pt: 2, pb: 4 }}>
				This project, especially the authentication aspect is currently under
				development. To preview the project, including example characters,
				please log in with the following credentials:
			</Typography>
			<Typography variant="body1" sx={{ pt: 2 }}>
				Email: test@test.com
			</Typography>
			<Typography variant="body1" sx={{ pt: 2, pb: 4 }}>
				Password: test1
			</Typography>
			{userData.loggedIn ? logOut : logIn}
			{/* <GoogleLogin
				onSuccess={(credentialResponse) => {
					if (credentialResponse.credential) {
						console.log(credentialResponse)
						// let newUser = nullUser()
						// newUser.token = credentialResponse.credential
						// setUserData(newUser)
						// console.log(newUser)
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
