import * as React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import LogIn from './Components/LogIn'
import NavBar from './Components/NavBar'
import About from './Components/About'
import useMediaQuery from '@mui/material/useMediaQuery'
import User from './Components/User/User'
import Character from './Components/Character/Character'
import { nullUser, handleLogOut } from './Components/Utils'

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
	}, [])

	let home = (
		<LogIn
			tablet={tablet}
			desktop={desktop}
			userData={userData}
			setUserData={setUserData}
			handleLogOut={handleLogOut}
		/>
	)
	if (userData.loggedIn) {
		home = (
			<User
				tablet={tablet}
				desktop={desktop}
				userData={userData}
				setUserData={setUserData}
				setCharacterId={setCharacterId}
				dense={dense}
				setDense={setDense}
			/>
		)
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
				<Route path="/" element={home} />
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
