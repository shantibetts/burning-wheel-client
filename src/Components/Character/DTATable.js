import * as React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import Paper from '@mui/material/Paper'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import { getCharacter } from './../Utils'
import TableHeader from '../TableHeader'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import AddIcon from '@mui/icons-material/Add'
import DTARow from './DTARow'
import DTATableHead from './DTATableHead'

const DTATable = (props) => {
	const { userData, setUserData, characterIndex } = props

	let character = getCharacter(userData, characterIndex)
	console.log(character, character.stats)

	// States for controlling the Table
	const [dense, setDense] = React.useState(false)

	return (
		<Paper sx={{ width: '100%', mb: 2 }}>
			{/* Table toolbar and Title */}
			<TableContainer>
				<Table
					stickyHeader
					sx={{ minWidth: 370 }}
					aria-labelledby="tableTitle"
					size={dense ? 'small' : 'medium'}
				>
					<DTATableHead dense={dense} setDense={setDense} />
					<TableBody>
						<TableRow>
							<TableCell align="center" colSpan={10}>
								Stats
							</TableCell>
						</TableRow>
						{character.stats.map((row, i) => (
							<DTARow
								key={i}
								row={row}
								userData={userData}
								setUserData={setUserData}
							/>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Paper>
	)
}

export default DTATable
