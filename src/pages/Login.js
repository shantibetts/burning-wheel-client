import { useState } from 'react'
import { useLogin } from './../hooks/useLogin'

// MUI Components
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Paper from '@mui/material/Paper'

const Login = (props) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const { login, error, isLoading } = useLogin()

	const handleSubmit = async (e) => {
		e.preventDefault()
		await login(email, password)
	}

	const handlePreview = async (e) => {
		e.preventDefault()
		await login('test@test.com', 'ABCabc123!')
	}

	return (
		<Paper className="home">
			<Typography variant="h2" sx={{ py: 3 }}>
				Welcome!
			</Typography>
			<Typography variant="h4" sx={{ py: 3 }}>
				What is Burning Wheel?
			</Typography>
			<Typography variant="body1" sx={{ pt: 2, pb: 4, px: 4 }}>
				Burning Wheel is an award-winning fantasy roleplaying game in which
				players take on the roles of vibrant, dynamic characters whose very
				beliefs propel the story forward. Starting with a simple D6 dice pool
				mechanic, this game intuitively builds on its core concepts. The rules
				detail dramatic systems for task resolution, advancement, trials of
				belief, tests of nerve, searing social conflict, dangerous sorcery,
				miraculous faith, and brutal, gut-wrenching martial combat.
			</Typography>
			<Typography variant="h4" sx={{ py: 3 }}>
				Why the Burning Wheel CharSheet?
			</Typography>
			<Typography variant="body1" sx={{ pt: 2, pb: 4, px: 4 }}>
				For all but the simplest role playing games, tracking changes to
				characters is usually something between a headache and a chore! The
				complexity and character-driven nature of Burning Wheel makes it all the
				more difficult, and can often lead to critical minutes of game time lost
				to paging through the books looking up rules about how the current
				situation and the character's circumstances affect their next role. The
				Burning Wheel CharSheet is an attempt to automate and integrate those
				calculations, while displaying all of their critical information in an
				intuitive and powerful way.
			</Typography>
			<Button
				size="medium"
				variant="outlined"
				sx={{ m: 1 }}
				disabled={isLoading}
				onClick={handlePreview}
			>
				Try Demo
			</Button>
			<form className="login">
				<Typography variant="h5" sx={{ pt: 2, pb: 4 }}>
					Please log in to continue
				</Typography>
				<TextField
					required={true}
					type="email"
					label="email"
					value={email}
					variant="outlined"
					onChange={(e) => setEmail(e.target.value)}
				/>
				<TextField
					required={true}
					type="password"
					label="password"
					value={password}
					variant="outlined"
					onChange={(e) => setPassword(e.target.value)}
				/>
				<Button
					size="medium"
					variant="outlined"
					sx={{ m: 1 }}
					disabled={isLoading}
					onClick={handleSubmit}
				>
					Log in
				</Button>
				{error && (
					<Typography variant="body1" sx={{ pt: 2, pb: 4 }}>
						{error}
					</Typography>
				)}
			</form>
		</Paper>
	)
}

export default Login
