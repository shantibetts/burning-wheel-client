import * as React from 'react'
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
// import { handleLogOut } from './Utils'

// Hacks
import { nullUser } from './Utils'
import axios from 'axios'
import apiUrl from '../apiUrl'

// hacks

const NavBar = (props) => {
	const { userData, setUserData, setCharacterId } = props

	// Constants
	const navigate = useNavigate()

	// States controlling for nav-bar menu
	const [anchorEl, setAnchorEl] = React.useState(null)
	const open = Boolean(anchorEl)

	// Functions to open and close the nav-bar menu
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}

	const handleLogOut = (setUserData, navigate) => {
		axios
			.post(apiUrl + `/auth/logout/`, { withCredentails: true })
			.then((res) => {
				console.log(res)
				setUserData(nullUser())
				navigate('/')
			})
			.catch((err) => {
				console.log('something went wrong', err)
			})
	}

	// Set Username & Characters
	let userName = ''
	let characters = ''
	if (userData.name !== '') {
		// Set navigate to home
		userName = (
			<MenuItem onClick={handleClose} component={RouterLink} to={'/'}>
				Character List
			</MenuItem>
		)
		// Set navigate to characters
		characters = userData.characters.map((character, i) => {
			return (
				<MenuItem
					key={i}
					onClick={() => {
						setCharacterId(character._id)
						handleClose()
					}}
					component={RouterLink}
					to={'/character/' + character.characterName}
				>
					{character.characterName}
				</MenuItem>
			)
		})
	}

	// Set location Name based on route for title to display
	let location = useLocation().pathname
	let locationName = ''
	if (location === '/' && userData.name === '') {
		locationName = 'Burning Wheel CharSheet'
	}
	if (location === '/' && userData.name !== '') {
		locationName = userData.name
	}
	if (location.slice(0, 11) === '/character/') {
		locationName = location.slice(11)
		locationName = locationName.split('%20').join(' ')
	}

	const loginButton = (
		<Button color="inherit" onClick={() => navigate('/')}>
			Log in
		</Button>
	)

	const logOutButton = (
		<Button color="inherit" onClick={() => handleLogOut(setUserData, navigate)}>
			Log out
		</Button>
	)

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
						onClick={handleClick}
					>
						<MenuIcon />
					</IconButton>
					<Menu
						id="navigation-menu"
						anchorEl={anchorEl}
						open={open}
						onClose={handleClose}
						MenuListProps={{
							'aria-labelledby': 'navigation-button'
						}}
					>
						<MenuItem onClick={handleClose} component={RouterLink} to="/">
							Home
						</MenuItem>
						{userName}
						{characters}
						<MenuItem onClick={handleClose} component={RouterLink} to="/about">
							About
						</MenuItem>
					</Menu>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						{locationName}
					</Typography>
					{userData.loggedIn ? logOutButton : loginButton}
				</Toolbar>
			</AppBar>
		</Box>
	)
}

export default NavBar
