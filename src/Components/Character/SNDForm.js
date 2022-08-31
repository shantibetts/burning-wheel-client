import { camelize, createEmptyTableData } from '../Utils'

// Context and Hooks
import { useCharactersContext } from './../../hooks/useCharactersContext'
import { useAttributeUpdate } from '../../hooks/useAttributeUpdate'

// MUI Components
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

const SNDForm = ({
	type,
	attribute,
	handleToggle,
	dialogType,
	dialogData,
	setDialogData,
	dialogOpen,
	setDialogType
}) => {
	const { character } = useCharactersContext()
	const { attributeUpdate, error, isLoading } = useAttributeUpdate()

	// Create form title:
	let dialogTitle = attribute.slice(0, -1)
	if (attribute === 'aliases') {
		dialogTitle = 'alias'
	}

	// Functions to change form state
	const handleValuesChange = (event, attribute) => {
		const newData = { ...dialogData }
		newData[attribute.toLowerCase()] = parseInt(event.target.value)
			? parseInt(event.target.value)
			: event.target.value
		setDialogData(newData)
	}
	const handleIsActiveToggle = () => {
		const newData = { ...dialogData }
		newData.isActive = !newData.isActive
		setDialogData(newData)
	}

	// Functions to update database
	const handleUpdate = async () => {
		const updatePackage = {}
		if (dialogType === 'edit') {
			const attributeArray = character[attribute]
			const index = attributeArray.findIndex((a) => a._id === dialogData._id)
			attributeArray.splice(index, 1, dialogData)
			updatePackage[attribute] = attributeArray
		} else {
			updatePackage[attribute] = [...character[attribute], dialogData]
		}
		await attributeUpdate(updatePackage)
		handleToggle()
	}

	const handleDelete = async () => {
		const updatePackage = {}
		const attributeArray = character[attribute]
		const index = attributeArray.findIndex((a) => a._id === dialogData._id)
		attributeArray.splice(index, 1)
		updatePackage[attribute] = attributeArray
		await attributeUpdate(updatePackage)
		handleToggle()
	}

	// List of labels for standard SND form
	let SNDlist = ['Shade', 'Exponent', 'Name', 'Description']
	// update SND list to standard ND form
	if (type === 'ND') {
		SNDlist.splice(0, 2)
	}
	// List of labels for Traits form
	if (attribute === 'traits') {
		SNDlist = ['Name', 'Description', 'Effect']
	}
	// List of labels for Beliefs form
	if (attribute === 'beliefs') {
		SNDlist = ['Name', 'Description', 'Action', 'Active']
	}
	// Add delete button to edit dialog
	let deleteButton = ''
	if (dialogType === 'edit') {
		deleteButton = (
			<Button variant="contained" color="secondary" onClick={handleDelete}>
				Delete
			</Button>
		)
	}

	return (
		<Dialog
			open={dialogOpen}
			onClose={() => {
				setDialogData(createEmptyTableData())
				setDialogType('')
				handleToggle()
			}}
		>
			<DialogTitle>
				{dialogType === 'edit'
					? `Edit ${dialogTitle}`
					: `Add new ${dialogTitle}`}
			</DialogTitle>
			<DialogContent>
				<Box
					component="form"
					sx={{
						'& > :not(style)': { m: 1, width: '100%' }
					}}
					noValidate
					autoComplete="off"
				>
					{SNDlist.map((field) => {
						if (field === 'Active') {
							return (
								<FormControlLabel
									key={field}
									control={
										<Checkbox
											checked={dialogData.isActive}
											onChange={handleIsActiveToggle}
										/>
									}
									label={field}
								/>
							)
						} else {
							return (
								<TextField
									key={field}
									id={field}
									label={field}
									value={dialogData[camelize(field)]}
									variant="outlined"
									onChange={(event) =>
										handleValuesChange(event, camelize(field))
									}
								/>
							)
						}
					})}
				</Box>
			</DialogContent>
			<DialogActions>
				{deleteButton}
				<Button
					variant="contained"
					onClick={() => {
						setDialogData(createEmptyTableData())
						setDialogType('')
						handleToggle()
					}}
				>
					Cancel
				</Button>
				<Button variant="contained" onClick={handleUpdate}>
					Submit
				</Button>
			</DialogActions>
		</Dialog>
	)
}

export default SNDForm
