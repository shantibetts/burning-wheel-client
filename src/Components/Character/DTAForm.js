import { handleAttributeUpdate, createEmptyTableData } from '../Utils'

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
import Typography from '@mui/material/Typography'

const DTAForm = ({
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
	let dialogTitle = ''
	if (attribute === 'stats') {
		dialogTitle = 'stat'
	}
	if (attribute === 'attributes') {
		dialogTitle = 'attribute'
	}
	if (attribute === 'skills') {
		dialogTitle = 'skill'
	}
	if (attribute === 'skillsLearning') {
		dialogTitle = 'skill being learned'
	}

	// Handle functions set state to form values
	const handleNameChange = (event) => {
		const newData = { ...dialogData }
		newData.name = event.target.value
		setDialogData(newData)
	}
	const handleValuesChange = (event, attribute) => {
		const newData = { ...dialogData }
		newData[attribute.toLowerCase()] = parseInt(event.target.value)
			? parseInt(event.target.value)
			: event.target.value
		setDialogData(newData)
	}

	const handleUpdate = () => {
		const attributeArray = character[attribute]
		const index = attributeArray.findIndex((a) => (a._id = dialogData._id))
		attributeArray.splice(index, 1, dialogData)
		const updatePackage = { [attribute]: attributeArray }
		console.log(updatePackage)
		attributeUpdate(updatePackage)
	}

	// List of labels for DTA elements
	let DTAlist = [
		'Shade',
		'Exponent',
		'Tax',
		'Routine',
		'Difficult',
		'Challenging',
		'Fate',
		'Persona',
		'Deeds'
	]
	// add roots for skills
	if (attribute === 'skills') {
		DTAlist = ['Root1', 'Root2', ...DTAlist]
	}
	// list of labels for skillsLearning
	if (attribute === 'skillsLearning') {
		DTAlist = ['Root1', 'Root2', 'Routine', 'Fate', 'Persona', 'Deeds']
	}
	// Array to create form elements
	const formArray = [
		{
			label: 'Name',
			value: dialogData.name,
			disabled:
				attribute === 'stats' || attribute === 'attributes' ? true : false,
			onChange: handleNameChange
		},
		...DTAlist.map((value) => {
			return {
				label: value,
				value: dialogData[value.toLowerCase()],
				disabled: false,
				onChange: (event) => handleValuesChange(event, value)
			}
		})
	]

	// Add delete button to edit dialog
	let deleteButton = ''
	if (
		dialogType === 'edit' &&
		(attribute !== 'stats' || attribute !== 'attributes')
	) {
		deleteButton = (
			<Button variant="contained" color="secondary" onClick={() => {}}>
				Delete
			</Button>
		)
	}

	// Error message
	const errorMessage = (
		<div>
			<Typography variant="h2" sx={{ py: 3 }}>
				Error
			</Typography>
			<Typography variant="body1" sx={{ pt: 2, pb: 4 }}>
				{error}
			</Typography>
		</div>
	)

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
					{formArray.map((field) => {
						return (
							<TextField
								key={field.label}
								required={
									(attribute === 'skills' || attribute === 'skillsLearning') &&
									field.label === 'Root2'
										? false
										: true
								}
								id={field.label}
								label={field.label}
								value={field.value}
								variant="outlined"
								onChange={field.onChange}
								disabled={field.disabled}
							/>
						)
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
				<Button variant="contained" onClick={handleUpdate} disabled={isLoading}>
					Submit
				</Button>
			</DialogActions>
			{error && errorMessage}
		</Dialog>
	)
}

export default DTAForm
