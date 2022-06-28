import * as React from 'react'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import AddIcon from '@mui/icons-material/Add'

const TableToolbar = (props) => {
	const { title, handleAdd, addTitle } = props

	return (
		// This toolbar contains the table header OR the selected bugs feature
		<Toolbar
			sx={{
				pl: { sm: 2 },
				pr: { xs: 1, sm: 1 }
			}}
		>
			<Tooltip title={addTitle}>
				<IconButton onClick={handleAdd}>
					<AddIcon />
				</IconButton>
			</Tooltip>
			<Typography
				sx={{ flex: '1 1 100%' }}
				variant="h6"
				id="tableTitle"
				component="div"
			>
				{title}
			</Typography>
		</Toolbar>
	)
}

export default TableToolbar
