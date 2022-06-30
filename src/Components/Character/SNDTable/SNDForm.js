import * as React from 'react'
import { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import {
	handleCharacterUpdate,
	createEmptyTableData,
	writeDTAData
} from './../../Utils'

const SNDForm = (props) => {
	const {
		handleToggle,
		dialogType,
		dialogData,
		setDialogData,
		DTADialogOpen,
		setUserData,
		userData,
		setDialogType,
		characterId
	} = props

	// Create form title:
	let dialogTitle = ''
	if (dialogType.attribute === 'stats') {
		dialogTitle = 'stat'
	}
	if (dialogType.attribute === 'attributes') {
		dialogTitle = 'attribute'
	}
	if (dialogType.attribute === 'skills') {
		dialogTitle = 'skill'
	}
	if (dialogType.attribute === 'skillLearning') {
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
		newData[`${attribute.toLowerCase()}`] = event.target.value
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
	if (dialogType.attribute === 'skills') {
		DTAlist = ['Root1', 'Root2', ...DTAlist]
	}
	if (dialogType.attribute === 'skillsLearning') {
		DTAlist = ['Root1', 'Root2', 'Routine', 'Fate', 'Persona', 'Deeds']
	}
	// Array to create form elements
	const formArray = [
		{
			label: 'Name',
			value: dialogData.name,
			disabled:
				dialogType.attribute === 'stats' ||
				dialogType.attribute === 'attributes'
					? true
					: false,
			onChange: handleNameChange
		},
		...DTAlist.map((value) => {
			return {
				label: value,
				value: dialogData[`${value.toLowerCase()}`],
				disabled: false,
				onChange: (event) => handleValuesChange(event, value)
			}
		})
	]

	return (
		<Dialog
			open={DTADialogOpen}
			onClose={() => {
				setDialogData(createEmptyTableData())
				setDialogType('')
				handleToggle()
			}}
		>
			<DialogTitle>
				{dialogType.type === 'edit'
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
									(dialogType.attribute === 'skills' ||
										dialogType.attribute === 'skillsLearning') &&
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
				<Button
					variant="contained"
					onClick={() =>
						handleCharacterUpdate(
							setUserData,
							userData,
							userData.characters[characterId]._id,
							writeDTAData(dialogType, dialogData)
						)
					}
				>
					Submit
				</Button>
			</DialogActions>
		</Dialog>
	)
}

export default SNDForm
