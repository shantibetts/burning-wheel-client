import * as React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import LogIn from './Components/LogIn'
import NavBar from './Components/NavBar'
import About from './Components/About'
import useMediaQuery from '@mui/material/useMediaQuery'
import User from './Components/User/User'
import Character from './Components/Character/Character'
import { nullUser } from './Components/Utils'

function App() {
	// User's info + list of characters
	const [userData, setUserData] = React.useState(nullUser())
	const [characterId, setCharacterId] = React.useState([])
	const [dense, setDense] = React.useState(true)

	// Media queries to set width
	let tablet = useMediaQuery('(min-width:600px)')
	let desktop = useMediaQuery('(min-width:900px)')

	React.useEffect(() => {
		if (tablet || desktop) {
			setDense(false)
		}
	})

	// Log out a user
	const handleLogOut = () => {
		// Send request to log out user
		// reset userData state
		// Navigate to log-in page
	}

	return (
		<div className="App">
			<NavBar
				userData={userData}
				setUserData={setUserData}
				setCharacterId={setCharacterId}
				handleLogOut={handleLogOut}
			/>
			<Routes>
				<Route
					path="/"
					element={
						<LogIn
							tablet={tablet}
							desktop={desktop}
							userData={userData}
							setUserData={setUserData}
							handleLogOut={handleLogOut}
						/>
					}
				/>
				<Route
					path="/user/:user"
					element={
						<User
							tablet={tablet}
							desktop={desktop}
							userData={userData}
							setUserData={setUserData}
							setCharacterId={setCharacterId}
							dense={dense}
							setDense={setDense}
						/>
					}
				/>
				<Route
					path="/character/:name"
					element={
						<Character
							tablet={tablet}
							desktop={desktop}
							userData={userData}
							setUserData={setUserData}
							characterId={characterId}
							setCharacterId={setCharacterId}
							dense={dense}
							setDense={setDense}
						/>
					}
				/>
				<Route path="/about" element={<About />} />
			</Routes>
		</div>
	)
}

export default App
