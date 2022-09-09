// Context
import { useCharactersContext } from './../../hooks/useCharactersContext'
import { useDisplayContext } from '../../hooks/useDisplayContext'

// MUI Components
import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import Paper from '@mui/material/Paper'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'

// Components
import SNDRow from './SNDRow'
import SNDTableHead from './SNDTableHead'

const SNDTable = ({ attribute }) => {
	const { character } = useCharactersContext()
	const { dense } = useDisplayContext()

	// Title for table and add new button
	let displayTitle = attribute.charAt(0).toUpperCase() + attribute.slice(1)
	let tooltip = 'Add new ' + attribute.slice(0, -1)
	if (attribute === 'SkillsLearning') {
		tooltip = 'Add new skill'
		displayTitle = 'Skills Being Learned'
	}

	return (
		<Paper sx={{ width: '100%', mb: 2 }}>
			<Typography
				sx={{ flex: '1 1 100%' }}
				variant="h6"
				id="tableTitle"
				component="div"
			>
				{displayTitle}
			</Typography>
			<TableContainer>
				<Table
					sx={{ minWidth: 370 }}
					aria-labelledby="tableTitle"
					size={dense ? 'small' : 'medium'}
				>
					<SNDTableHead tooltip={tooltip} attribute={attribute} />
					<TableBody>
						{character[attribute].map((row, i) => (
							<SNDRow key={i} attribute={attribute} row={row} />
						))}
						<TableRow />
					</TableBody>
				</Table>
			</TableContainer>
		</Paper>
	)
}

export default SNDTable
