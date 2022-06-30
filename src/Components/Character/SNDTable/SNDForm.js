import * as React from 'react'
import { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import {
	handleAttributeUpdate,
	camelize,
	createEmptyTableData
} from '../../Utils'

const SNDForm = (props) => {
	const {
		type,
		attribute,
		handleToggle,
		dialogType,
		dialogData,
		setDialogData,
		dialogOpen,
		setUserData,
		userData,
		setDialogType,
		characterId
	} = props

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

	// List of labels for standard SND form
	let SNDlist = ['Shade', 'Exponent', 'Name', 'Description']
	// update SND list to standard ND form
	if (type === 'ND') {
		SNDlist.splice(0, 2)
	}
	// List of labels for Traits form
	if (attribute === 'traits') {
		SNDlist = ['Name', 'Description', 'Call On']
	}
	// List of labels for Beliefs form
	if (attribute === 'beliefs') {
		SNDlist = ['Name', 'Description', 'Action', 'Active']
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
									onChange={(event) => handleValuesChange(event, field)}
								/>
							)
						}
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
						handleAttributeUpdate(
							setUserData,
							userData,
							characterId,
							attribute,
							dialogData,
							handleToggle
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
