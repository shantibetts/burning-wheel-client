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
		handleToggle,
		dialogType,
		dialogData,
		setDialogData,
		DTADialogOpen,
		setUserData,
		setDialogType
	} = props

	// Create empty form data
	const emptyFormData = createDTAData('', '', '', '', '', '', '', '', '', '')

	// Handle functions set state to form values
	const handleNameChange = (event) => {
		const newData = { ...dialogData }
		newData.name = event.target.value
		setDialogData(newData)
	}
	const handleValuesChange = (event, index) => {
		const newData = { ...dialogData }
		newData.values[index] = event.target.value
		setDialogData(newData)
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
	if (dialogType.title === 'skill being learned') {
		DTAlist = ['Routine', 'Fate', 'Persona', 'Deeds']
	}
	// Array to create form elements
	const formArray = [
		{
			label: 'Name',
			value: dialogData.name,
			disabled:
				dialogType.title === 'stat' || dialogType.title === 'attribute'
					? true
					: false,
			onChange: handleNameChange
		},
		...DTAlist.map((value, index) => {
			return {
				label: value,
				value: dialogData[`${value.toLowerCase()}`],
				disabled: false,
				onChange: (event) => handleValuesChange(event, index)
			}
		})
	]

	return (
		<Dialog
			open={DTADialogOpen}
			onClose={() => {
				setDialogData(emptyFormData)
				setDialogType('')
				handleToggle()
			}}
		>
			<DialogTitle>
				{dialogType.type === 'edit'
					? `Edit ${dialogType.title}`
					: `Add new ${dialogType.title}`}
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
						setDialogData(emptyFormData)
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
					// 				dialogData,
					// 				setDialogData,
					// 				handleToggle,
					// 				dialogData,
					// 				setAllUsers,
					// 				setDialogData,
					// 				emptyFormData
					// 		  )
					// 		: handleNew(
					// 				dialogData,
					// 				setDialogData,
					// 				handleToggle,
					// 				setAllUsers,
					// 				setDialogData,
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
