import { useState } from 'react'
import { useSignup } from './../hooks/useSignup'

// MUI Components
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

const Signup = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const { signup, error, isLoading } = useSignup()

	const handleSubmit = async (e) => {
		e.preventDefault()
		await signup(email, password)
	}

	return (
		<form className="signup">
			<Typography variant="h5" sx={{ pt: 2, pb: 4 }}>
				Sign up
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
				Sign up
			</Button>
			{error && (
				<Typography variant="body1" sx={{ pt: 2, pb: 4 }}>
					{error}
				</Typography>
			)}
		</form>
	)
}

export default Signup
