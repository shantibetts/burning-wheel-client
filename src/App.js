import * as React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import NavBar from './Components/NavBar'
import About from './Components/About'
import useMediaQuery from '@mui/material/useMediaQuery'
import User from './Components/User'
import Character from './Components/Character'

function App() {
	// User's info + list of characters
	const [userData, setUserData] = React.useState([])

	// State for user's logged-in status
	const [isLoggedIn, setIsLoggedIn] = React.useState(false)

	// Media queries to set width
	let tablet = useMediaQuery('(min-width:600px)')
	let desktop = useMediaQuery('(min-width:900px)')

	return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route
					path="/"
					element={
						<Home
							tablet={tablet}
							desktop={desktop}
							setUserData={setUserData}
							setIsLoggedIn={setIsLoggedIn}
						/>
					}
				/>
				<Route
					path="/:user"
					element={
						<User
							tablet={tablet}
							desktop={desktop}
							userData={userData}
							setUserData={setUserData}
						/>
					}
				/>
				<Route
					path="/:user/:character"
					element={
						<Character
							tablet={tablet}
							desktop={desktop}
							userData={userData}
							setUserData={setUserData}
						/>
					}
				/>
				<Route path="/about" element={<About />} />
			</Routes>
		</div>
	)
}

export default App
