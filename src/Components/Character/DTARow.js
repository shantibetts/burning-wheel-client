import * as React from 'react'
import { characterTableCells } from '../TableConfig'
import { statTests, skillTests } from '../RulesLookups'

// Context
import { useFormContext } from '../../hooks/useFormContext'
import { useCharactersContext } from '../../hooks/useCharactersContext'

// MUI Components
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import IconButton from '@mui/material/IconButton'
import EditIcon from '@mui/icons-material/Edit'
import Tooltip from '@mui/material/Tooltip'

const DTARow = ({ attribute, row }) => {
	// Form context
	const { formDispatch } = useFormContext()
	const { character } = useCharactersContext()

	// Get list of cells to iterate over
	let rowCells = characterTableCells[attribute]

	// Get number of tests needed to advance
	let testsNeeded = {}
	if (attribute === 'skillsLearning' && row.root2) {
		testsNeeded = {
			routine: Math.round(
				(20 -
					character.stats[
						character.stats.findIndex((stat) => stat.name === row.root1)
					].exponent -
					character.stats[
						character.stats.findIndex((stat) => stat.name === row.root2)
					].exponent) /
					2
			)
		}
	} else if (attribute === 'skillsLearning' && !row.root2) {
		testsNeeded.routine =
			10 -
			character.stats[
				character.stats.findIndex((stat) => stat.name === row.root1)
			].exponent
	} else if (attribute === 'stats') {
		testsNeeded = statTests[row.exponent]
	} else {
		testsNeeded = skillTests[row.exponent]
	}

	return (
		<React.Fragment>
			<TableRow hover>
				<TableCell component="th" scope="row">
					<Tooltip title={'Edit ' + row.name.toLowerCase()}>
						<IconButton
							aria-label="edit row"
							size="small"
							onClick={() => {
								formDispatch({
									type: 'EDIT',
									payload: {
										formAttribute: attribute,
										formData: row
									}
								})
							}}
						>
							<EditIcon />
						</IconButton>
					</Tooltip>
				</TableCell>
				{rowCells.map((cell, i) => {
					if (cell === 'strength') {
						return (
							<TableCell key={i} align="center">
								{row.shade + row.exponent}
							</TableCell>
						)
					}
					if (cell === 'roots') {
						return (
							<TableCell key={i} align="left">
								{row.root2 ? row.root1 + ', ' + row.root2 : row.root1}
							</TableCell>
						)
					}
					if (['routine', 'difficult', 'challenging'].includes(cell)) {
						if (row[cell] === testsNeeded[cell]) {
							return (
								<TableCell key={i} align="center" className="rgb">
									<span className="complete">&#10003;</span>
								</TableCell>
							)
						}
						return (
							<TableCell key={i} align="center" className="rgb">
								{row[cell]}
								<span className="fraction">/{testsNeeded[cell]}</span>
							</TableCell>
						)
					}
					return (
						<TableCell key={i} align={cell === 'name' ? 'left' : 'center'}>
							{row[cell]}
						</TableCell>
					)
				})}
			</TableRow>
		</React.Fragment>
	)
}

export default DTARow
