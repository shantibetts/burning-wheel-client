import * as React from 'react'
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import { useCharactersContext } from '../hooks/useCharactersContext'

// MUI Components
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

const NavBar = () => {
	// Global states and functions
	const { logout } = useLogout()
	const { user } = useAuthContext()
	const { character } = useCharactersContext()

	// States controlling for nav-bar menu
	const [anchorEl, setAnchorEl] = React.useState(null)
	const open = Boolean(anchorEl)

	// Constants
	const navigate = useNavigate()

	// Functions to open and close the nav-bar menu
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}

	// Log out user
	const handleLogOut = () => {
		logout()
	}

	// Set location Name based on route for title to display
	let location = useLocation().pathname
	let locationName = 'Burning Wheel CharSheet'
	if (user && location === '/') {
		locationName = user.email
	}
	if (character && location.charAt(1) === 'c') {
		locationName = character.name
	}

	const loginButton = (
		<div className="login">
			<Button color="inherit" onClick={() => navigate('/login')}>
				Log in
			</Button>
			<Button color="inherit" onClick={() => navigate('/signup')}>
				Sign up
			</Button>
		</div>
	)

	const logOutButton = (
		<Button color="inherit" onClick={handleLogOut}>
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
						<MenuItem onClick={handleClose} component={RouterLink} to="/about">
							About
						</MenuItem>
					</Menu>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						{locationName}
					</Typography>
					{user ? logOutButton : loginButton}
				</Toolbar>
			</AppBar>
		</Box>
	)
}

export default NavBar
