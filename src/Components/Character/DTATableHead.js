import { characterTableCells } from '../TableConfig'
import { capitalize } from '../Utils'

// Context
import { useFormContext } from '../../hooks/useFormContext'

// MUI Components
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import AddIcon from '@mui/icons-material/Add'

const DTATableHead = ({ attribute }) => {
	// Form dispatch from context
	const { formDispatch } = useFormContext()

	// create tool tip from attribute
	let tooltip = 'Add new ' + attribute.slice(0, -1)
	if (attribute === 'skillsLearning') {
		tooltip = 'Add new skill being learned'
	}

	// Add new button
	const addButton = (
		<Tooltip title={tooltip}>
			<IconButton
				onClick={() => {
					formDispatch({
						type: 'NEW',
						payload: { formAttribute: attribute }
					})
				}}
			>
				<AddIcon />
			</IconButton>
		</Tooltip>
	)

	return (
		<TableHead>
			<TableRow>
				<TableCell>{attribute === 'stats' ? '' : addButton}</TableCell>
				<TableCell />
				<TableCell align="center" colSpan={2}>
					Die Pool
				</TableCell>
				<TableCell align="center" colSpan={3}>
					Tests
				</TableCell>
				<TableCell align="center" colSpan={3}>
					Artha
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell />
				{characterTableCells[attribute].map((cell, i) => (
					<TableCell key={i} align="left">
						{cell === 'name' ? capitalize(cell) : cell.charAt(0).toUpperCase()}
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	)
}

export default DTATableHead
