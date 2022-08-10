import * as React from 'react'
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// MUI Components
import useMediaQuery from '@mui/material/useMediaQuery'

// Pages and Components
import NavBar from './components/NavBar'
import About from './pages/About'
import Home from './pages/Home'
import Character from './pages/Character'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
	// User's info + list of characters
	const { user } = useAuthContext()

	// Set as part of user context?
	// ***

	// Media queries to set width
	// let tablet = useMediaQuery('(min-width:600px)')
	// let desktop = useMediaQuery('(min-width:900px)')

	// React.useEffect(() => {
	// 	if (tablet || desktop) {
	// 		setDense(false)
	// 	}
	// }, [])

	// ***

	return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
				<Route
					path="/login"
					element={!user ? <Login /> : <Navigate to="/" />}
				/>
				<Route
					path="/signup"
					element={!user ? <Signup /> : <Navigate to="/" />}
				/>
				<Route path="/character/:name" element={<Character />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</div>
	)
}

export default App
