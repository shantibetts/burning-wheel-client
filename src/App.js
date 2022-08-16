import { useState } from 'react'
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// Pages and Components
import NavBar from './components/NavBar'
import About from './pages/About'
import Home from './pages/Home'
import Character from './pages/Character'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
	const { user } = useAuthContext()

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
				<Route
					path="/character/:name"
					element={user ? <Character /> : <Navigate to="/" />}
				/>
				<Route path="/about" element={<About />} />
			</Routes>
		</div>
	)
}

export default App
