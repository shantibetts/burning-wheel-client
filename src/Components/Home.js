import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const Home = () => {
	return (
		<div className="home">
			<Typography variant="h2" sx={{ py: 3 }}>
				Welcome!
			</Typography>
			<Typography variant="body1" sx={{ pt: 2, pb: 4 }}>
				The unoficial, online Burning Wheel Gold (+Codex) character sheet.
				Adapted from the Burning Wheel character sheet PDFs included with
				Burning Wheel Gold.
			</Typography>
			<Typography variant="body1" sx={{ pt: 2, pb: 4 }}>
				Please log in to continue
			</Typography>
			<Button href={'#'} size="medium" variant="outlined" sx={{ m: 1 }}>
				Log in with Google
			</Button>
		</div>
	)
}

export default Home
