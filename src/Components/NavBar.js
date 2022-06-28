import * as React from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

const NavBar = (props) => {
	const { userData } = props
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

	// Set Username
	let userName = ''
	if (userData !== null) {
		userName = (
			<MenuItem
				onClick={handleClose}
				component={RouterLink}
				to={'/user/' + userData.userName}
			>
				Character List
			</MenuItem>
		)
	}
	// set Characters
	let characters = ''
	if (userData !== null) {
		characters = userData.characters.map((character, i) => {
			return (
				<MenuItem
					key={i}
					onClick={handleClose}
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
	if (location === '/') {
		locationName = 'Burning Wheel CharSheet'
	}
	if (location.slice(0, 6) === '/user/') {
		locationName = location.slice(6)
		locationName = locationName.split('%20').join(' ')
	}
	if (location.slice(0, 11) === '/character/') {
		locationName = location.slice(11)
		locationName = locationName.split('%20').join(' ')
	}

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
					<Button color="inherit">Login</Button>
				</Toolbar>
			</AppBar>
		</Box>
	)
}

export default NavBar
