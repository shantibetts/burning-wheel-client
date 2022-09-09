import { dieTestArthaCells } from '../TableConfig'

// Context
import { useFormContext } from '../../hooks/useFormContext'

// MUI Components
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import AddIcon from '@mui/icons-material/Add'

const DTATableHead = ({ attribute, tooltip, handleDialogToggle }) => {
	// Form dispatch from context
	const { formDispatch } = useFormContext()

	// Add new button
	const addButton = (
		<Tooltip title={tooltip}>
			<IconButton onClick={handleDialogToggle}>
				<AddIcon />
			</IconButton>
		</Tooltip>
	)

	return (
		<TableHead>
			<TableRow>
				<TableCell>{attribute === 'stats' ? '' : addButton}</TableCell>
				<TableCell />
				<TableCell align="center" colSpan={3}>
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
				{dieTestArthaCells.map((cell) => (
					<TableCell key={cell} align="left">
						{cell === 'Name' ? cell : cell.charAt(0)}
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	)
}

export default DTATableHead
