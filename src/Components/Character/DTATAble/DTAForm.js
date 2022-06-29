import * as React from 'react'
import { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { createDTAData } from './../../Utils'

const DTAForm = (props) => {
	const {
		title,
		handleToggle,
		dialogType,
		dialogData,
		DTADialogOpen,
		setUserData,
		setDialogType
	} = props

	// Create empty form data
	const emptyFormData = createDTAData('', '', '', '', '', '', '', '', '', '')

	// State to track form input
	const [formData, setFormData] = useState(emptyFormData)
	console.log(dialogData, formData)
	// Use Effect populates state when an edit opesn
	React.useEffect(() => {
		if (dialogType === 'edit' && DTADialogOpen) {
			setFormData(createDTAData(dialogData.name, ...dialogData.values))
		}
	}, [DTADialogOpen])

	// Handle functions set state to form values
	const handleNameChange = (event) => {
		const newData = { ...formData }
		newData.userName = event.target.value
		setFormData(newData)
	}
	const handleValuesChange = (event, index) => {
		const newData = { ...formData }
		newData.values[index] = event.target.value
		setFormData(newData)
	}

	// List of labels for DTA elements
	const DTAlist = [
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
	// Array to create form elements
	const formArray = [
		{
			label: 'Name',
			value: formData.name,
			disabled: title === 'Stats' || title === 'Attributes' ? true : false,
			onChange: handleNameChange
		},
		...DTAlist.map((value, index) => {
			return {
				label: value,
				value: formData[`${value.toLowerCase()}`],
				disabled: false,
				onChange: (event) => handleValuesChange(event, index)
			}
		})
	]

	return (
		<Dialog
			open={DTADialogOpen}
			onClose={() => {
				setFormData(emptyFormData)
				setDialogType('')
				handleToggle()
			}}
		>
			<DialogTitle>
				{dialogType === 'edit' ? 'Edit User' : 'Add User'}
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
								required
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
				<Button
					variant="contained"
					onClick={() => {
						setFormData(emptyFormData)
						setDialogType('')
						handleToggle()
					}}
				>
					Cancel
				</Button>
				<Button
					variant="contained"
					// onClick={() =>
					// 	dialogType === 'edit'
					// 		? handleUpdate(
					// 				formData,
					// 				setFormData,
					// 				handleToggle,
					// 				dialogData,
					// 				setAllUsers,
					// 				setFormData,
					// 				emptyFormData
					// 		  )
					// 		: handleNew(
					// 				formData,
					// 				setFormData,
					// 				handleToggle,
					// 				setAllUsers,
					// 				setFormData,
					// 				emptyFormData
					// 		  )
					// }
				>
					Submit
				</Button>
			</DialogActions>
		</Dialog>
	)
}

export default DTAForm
