import { camelize, createEmptyTableData } from '../Utils'

// Context and Hooks
import { useCharactersContext } from '../../hooks/useCharactersContext'
import { useAttributeUpdate } from '../../hooks/useAttributeUpdate'
import { useFormContext } from '../../hooks/useFormContext'

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

const AttributeForm = () => {
	const { character } = useCharactersContext()
	const { attributeUpdate, error, isLoading } = useAttributeUpdate()
	const {
		formDispatch,
		formData,
		formFields,
		formType,
		formOpen,
		formAttribute
	} = useFormContext()

	// Create form title:
	let dialogTitle = formAttribute.slice(0, -1)
	if (formAttribute === 'aliases') {
		dialogTitle = 'alias'
	}

	// Functions to change formData state
	const handleValuesChange = (e, field) => {
		const newData = { ...formData }
		newData[field.toLowerCase()] = parseInt(e.target.value)
			? parseInt(e.target.value)
			: e.target.value
		formDispatch({ type: 'DATA_UPDATE', payload: newData })
	}
	const handleIsActiveToggle = () => {
		const newData = { ...formData }
		newData.isActive = !newData.isActive
		formDispatch({ type: 'DATA_UPDATE', payload: newData })
	}

	// Functions to update database
	const handleUpdate = async () => {
		const updatePackage = {}
		if (formType === 'edit') {
			const attributeArray = character[formAttribute]
			const index = attributeArray.findIndex((a) => a._id === formData._id)
			attributeArray.splice(index, 1, formData)
			updatePackage[formAttribute] = attributeArray
		} else {
			updatePackage[formAttribute] = [...character[formAttribute], formData]
		}
		await attributeUpdate(updatePackage)
		formDispatch({ type: 'CLOSE', payload: null })
	}

	const handleDelete = async () => {
		const updatePackage = {}
		const attributeArray = character[formAttribute]
		const index = attributeArray.findIndex((a) => a._id === formData._id)
		attributeArray.splice(index, 1)
		updatePackage[formAttribute] = attributeArray
		await attributeUpdate(updatePackage)
		formDispatch({ type: 'CLOSE', payload: null })
	}

	// // List of labels for standard SND form
	// let SNDlist = ['Shade', 'Exponent', 'Name', 'Description']
	// // update SND list to standard ND form
	// if (type === 'ND') {
	// 	SNDlist.splice(0, 2)
	// }
	// // List of labels for Traits form
	// if (attribute === 'traits') {
	// 	SNDlist = ['Name', 'Description', 'Effect']
	// }
	// // List of labels for Beliefs form
	// if (attribute === 'beliefs') {
	// 	SNDlist = ['Name', 'Description', 'Action', 'Active']
	// }

	// Add delete button to edit dialog
	let deleteButton = ''
	if (formType === 'edit') {
		deleteButton = (
			<Button variant="contained" color="secondary" onClick={handleDelete}>
				Delete
			</Button>
		)
	}

	return (
		<Dialog
			open={formOpen}
			onClose={() => {
				formDispatch({ type: 'CLOSE', payload: null })
			}}
		>
			<DialogTitle>
				{formType === 'edit' ? `Edit ${dialogTitle}` : `Add new ${dialogTitle}`}
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
					{formFields.map((field) => {
						if (field === 'Active') {
							return (
								<FormControlLabel
									key={field}
									control={
										<Checkbox
											checked={formData.isActive}
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
									value={formData[camelize(field)]}
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
						formDispatch({ type: 'CLOSE', payload: null })
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

export default AttributeForm
