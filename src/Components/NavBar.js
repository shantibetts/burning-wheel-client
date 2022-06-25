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

const NavBar = () => {
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

	// Set location Name based on route for title to display
	// let location = useLocation().pathname
	// let locationName = ''
	// if (location === '/') {
	// 	locationName = 'Burning Wheel Community'
	// } else if (location === '/decks') {
	// 	locationName = 'Tarot Decks'
	// } else if (location === '/threecardspread') {
	// 	locationName = 'Three Card Spread'
	// } else if (location === '/fivecardspread') {
	// 	locationName = 'Five Card Spread'
	// } else if (location === '/about') {
	// 	locationName = 'About'
	// }

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
						id="basic-menu"
						anchorEl={anchorEl}
						open={open}
						onClose={handleClose}
						MenuListProps={{
							'aria-labelledby': 'basic-button'
						}}
					>
						<MenuItem onClick={handleClose} component={RouterLink} to="/">
							Bugs
						</MenuItem>
						<MenuItem onClick={handleClose} component={RouterLink} to="/users">
							Users
						</MenuItem>
						<MenuItem onClick={handleClose} component={RouterLink} to="/about">
							About
						</MenuItem>
					</Menu>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						Burning Wheel Community
					</Typography>
					<Button color="inherit">Login</Button>
				</Toolbar>
			</AppBar>
		</Box>
	)
}

export default NavBar
