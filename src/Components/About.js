import { Link as RouterLink } from 'react-router-dom'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const About = (props) => {
	return (
		<div className="about">
			<Typography variant="h2" sx={{ py: 3 }}>
				About
			</Typography>
			<hr style={{ width: '90%' }} />
			<Typography variant="body1" sx={{ pt: 2, pb: 4 }}>
				The unoficial, online Burning Wheel Gold (+Codex) character sheet.
				Adapted from the Burning Wheel character sheet PDFs included with
				Burning Wheel Gold. V1: Display and edit character information according
				to the rules layed out in Burning Wheel Gold.
			</Typography>
			<br />
			<Typography variant="body2" sx={{ pt: 2, pb: 4 }}>
				Burning Wheel Community is copyright © 2022 Shanti Betts
			</Typography>
			<Button
				component={RouterLink}
				to="/"
				size="medium"
				variant="outlined"
				sx={{ m: 1 }}
			>
				Home
			</Button>
			<Button
				target={'_blank'}
				href={'https://shantibetts.github.io/Portfolio/'}
				size="medium"
				variant="outlined"
				sx={{ m: 1 }}
			>
				Portfolio
			</Button>
			<Button
				target={'_blank'}
				href={'https://github.com/shantibetts'}
				size="medium"
				variant="outlined"
				sx={{ m: 1 }}
			>
				GitHub
			</Button>
		</div>
	)
}

export default About
