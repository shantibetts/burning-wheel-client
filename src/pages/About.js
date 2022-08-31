import { Link as RouterLink } from 'react-router-dom'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import headshot from '../images/shanti.jpeg'

const About = (props) => {
	return (
		<div className="about">
			<Typography variant="h2" sx={{ py: 3 }}>
				About
			</Typography>
			<Typography variant="body1" sx={{ pt: 2, pb: 4, px: 4 }}>
				The unoficial, online Burning Wheel Gold (+Codex) character sheet.
				Adapted from the Burning Wheel character sheet PDFs included with
				Burning Wheel Gold. V1: Display and edit character information according
				to the rules layed out in Burning Wheel Gold. Mobile friendly comming
				soon.
			</Typography>
			<br />
			<Typography variant="h2" sx={{ py: 3 }}>
				Credits
			</Typography>
			<Typography variant="body1" sx={{ pt: 2, pb: 4, px: 4 }}>
				Burning Wheel is a fantasy roleplaying game first published in 2002.
				Since then, the game and its supplements have gone on to win critical
				notoriety, a handful of awards and respect from the RPG community. In
				2011, we published the latest edition, Burning Wheel Gold. There are
				5200 copies of the current edition of Burning Wheel in print, but over
				12,000 copies of the game overall. There are three supplements for
				Burning Wheel: the Monster Burner, the Magic Burner and the Adventure
				Burner.
			</Typography>
			<Button
				target={'_blank'}
				href={'https://www.burningwheel.com/'}
				size="medium"
				variant="outlined"
				sx={{ m: 1 }}
			>
				Burning Wheel Headquarters
			</Button>
			<Button
				target={'_blank'}
				href={'https://forums.burningwheel.com/'}
				size="medium"
				variant="outlined"
				sx={{ m: 1 }}
			>
				Burning Wheel Forums
			</Button>
			<Typography variant="body2" sx={{ pt: 2, pb: 4, px: 4 }}>
				Burning Wheel is copyright © 2022 Luke Crane
			</Typography>
			<br />
			<Typography variant="h2" sx={{ py: 3 }}>
				About the Author
			</Typography>
			<img className="portrait" src={headshot} alt="A headshot of Shanti" />
			<Typography variant="body1" sx={{ pt: 2, pb: 4, px: 4 }}>
				Shanti Betts is a full stack developer with a background in Mechnaical
				Engineering and security design. Passionate about leading teams in a
				collaborative environment to collectively cultivate new products and
				tools, while developing strategies that will increase efficiency and
				improve efficacy within the organization. Strengths in workflow design
				and standardization enables me to approach each project with an eye for
				scalability and automation.
			</Typography>
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

			<br />
			<Typography variant="body2" sx={{ pt: 2, pb: 4 }}>
				Burning Wheel Community is copyright © 2022 Shanti Betts
			</Typography>
			<br />
			<Button
				component={RouterLink}
				to="/"
				size="medium"
				variant="outlined"
				sx={{ m: 1 }}
			>
				Home
			</Button>
		</div>
	)
}

export default About
