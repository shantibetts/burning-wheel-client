import * as React from 'react'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import AddIcon from '@mui/icons-material/Add'

const TableToolbar = (props) => {
	const { title, handleAdd } = props

	let displayTitle = title
	let tooltip = 'Add new ' + title.toLowerCase().slice(0, title.length - 1)
	if (title === 'SkillsLearning') {
		tooltip = 'Add new skill'
		displayTitle = 'Skills Being Learned'
	}

	let addButton = (
		<Tooltip title={tooltip}>
			<IconButton onClick={handleAdd}>
				<AddIcon />
			</IconButton>
		</Tooltip>
	)
	if (title === 'Stats' || title === 'Attributes') {
		addButton = ''
	}

	return (
		// This toolbar contains the table header OR the selected bugs feature
		<Toolbar
			sx={{
				pl: { sm: 2 },
				pr: { xs: 1, sm: 1 }
			}}
		>
			{addButton}
			<Typography
				sx={{ flex: '1 1 100%' }}
				variant="h6"
				id="tableTitle"
				component="div"
			>
				{displayTitle}
			</Typography>
		</Toolbar>
	)
}

export default TableToolbar
