import * as React from 'react'

// Context
import { useCharactersContext } from './../../hooks/useCharactersContext'
import { useDisplayContext } from '../../hooks/useDisplayContext'
import { useFormContext } from '../../hooks/useFormContext'

// MUI Components
import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import Paper from '@mui/material/Paper'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import AddIcon from '@mui/icons-material/Add'

// Components
import SNDRow from './SNDRow'
import SNDTableHead from './SNDTableHead'

const SNDTable = ({ attribute }) => {
	const { character } = useCharactersContext()
	const { dense } = useDisplayContext()
	const { formDispatch } = useFormContext()

	// Title for table and add new button
	let displayTitle = attribute.charAt(0).toUpperCase() + attribute.slice(1)
	let tooltip = 'Add new ' + attribute.slice(0, -1)

	// Remove add new button from stats table
	let addButton = (
		<Tooltip title={tooltip}>
			<IconButton
				onClick={() => {
					formDispatch({
						type: 'NEW',
						payload: {
							formAttribute: attribute
						}
					})
				}}
			>
				<AddIcon />
			</IconButton>
		</Tooltip>
	)

	return (
		<Paper sx={{ width: '98%', mb: 2 }}>
			{attribute === 'beliefs' || attribute === 'instincts' ? addButton : ''}
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
					{attribute === 'beliefs' || attribute === 'instincts' ? (
						''
					) : (
						<SNDTableHead attribute={attribute} addButton={addButton} />
					)}

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
