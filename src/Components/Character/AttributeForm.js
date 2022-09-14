import * as React from 'react'
import { useState, useEffect } from 'react'
import { capitalize } from '../Utils'
import { characterFormCells } from '../TableConfig'

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
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'

const AttributeForm = () => {
	const { character } = useCharactersContext()
	const { attributeUpdate, error, isLoading } = useAttributeUpdate()
	const { formDispatch, formData, formType, formOpen, formAttribute } =
		useFormContext()
	// create local state to handle form updates
	const [data, setData] = useState(formData)

	// update state whenever formData is updated
	useEffect(() => {
		setData(formData)
	}, [formData])

	// Create form title:
	let formTitle = formAttribute.slice(0, -1)
	if (formAttribute === 'aliases') {
		formTitle = 'alias'
	}

	// Get list of fields for form
	const formFields = characterFormCells[formAttribute]

	// Functions to change data state
	const handleValuesChange = (e, field) => {
		const newData = { ...data }
		newData[field] = parseInt(e.target.value)
			? parseInt(e.target.value)
			: e.target.value
		setData(newData)
	}
	const handleIsActiveToggle = () => {
		const newData = { ...data }
		newData.isActive = !newData.isActive
		setData(newData)
	}
	const handleShadeChange = (e) => {
		const newData = { ...data }
		newData.shade = e.target.value
		setData(newData)
	}
	const handleRootChange = (e, root) => {
		const newData = { ...data }
		if (e.target.value === '') {
			delete newData[root]
		} else {
			newData[root] = e.target.value
		}
		setData(newData)
	}

	// Functions to update database
	const handleUpdate = async () => {
		const updatePackage = {}
		if (formType === 'EDIT') {
			const attributeArray = character[formAttribute]
			const index = attributeArray.findIndex((a) => a._id === data._id)
			attributeArray.splice(index, 1, data)
			updatePackage[formAttribute] = attributeArray
		} else {
			updatePackage[formAttribute] = [...character[formAttribute], data]
		}
		await attributeUpdate(updatePackage)
		formDispatch({ type: 'CLOSE', payload: null })
	}

	const handleDelete = async () => {
		const updatePackage = {}
		const attributeArray = character[formAttribute]
		const index = attributeArray.findIndex((a) => a._id === data._id)
		attributeArray.splice(index, 1)
		updatePackage[formAttribute] = attributeArray
		await attributeUpdate(updatePackage)
		formDispatch({ type: 'CLOSE', payload: null })
	}

	// Add delete button to edit dialog
	let deleteButton = ''
	if (
		formType === 'EDIT' &&
		formAttribute !== 'stats' &&
		formAttribute !== 'attributes'
	) {
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
				{formType === 'EDIT' ? `Edit ${formTitle}` : `Add new ${formTitle}`}
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
					{formFields &&
						formFields.map((field, i) => {
							if (field === 'isActive') {
								return (
									<FormControlLabel
										key={i}
										control={
											<Checkbox
												checked={data.isActive}
												onChange={handleIsActiveToggle}
											/>
										}
										label="Active"
									/>
								)
							}
							if (field === 'shade') {
								return (
									<FormControl fullWidth key={i}>
										<InputLabel id="shade-select-label">Shade</InputLabel>
										<Select
											labelId="shade-select-label"
											id="shade-select"
											defaultValue="Black"
											value={data.shade}
											label="Shade"
											onChange={(e) => handleShadeChange(e)}
										>
											<MenuItem value={'B'}>Black</MenuItem>
											<MenuItem value={'G'}>Grey</MenuItem>
											<MenuItem value={'W'}>White</MenuItem>
										</Select>
									</FormControl>
								)
							}
							if (field === 'roots') {
								return (
									<React.Fragment key={i}>
										<FormControl fullWidth>
											<InputLabel id="root1-select-label">Root 1</InputLabel>
											<Select
												labelId="root1-select-label"
												id="root1-select"
												value={data.root1 ? data.root1 : ''}
												label="Root 1"
												onChange={(e) => handleRootChange(e, 'root1')}
											>
												<MenuItem value={'Will'}>Will</MenuItem>
												<MenuItem value={'Perception'}>Perception</MenuItem>
												<MenuItem value={'Power'}>Power</MenuItem>
												<MenuItem value={'Forte'}>Forte</MenuItem>
												<MenuItem value={'Agility'}>Agility</MenuItem>
												<MenuItem value={'Speed'}>Speed</MenuItem>
											</Select>
										</FormControl>
										<FormControl fullWidth>
											<InputLabel id="root2-select-label">Root 2</InputLabel>
											<Select
												labelId="root2-select-label"
												id="root2-select"
												value={data.root2 ? data.root2 : ''}
												label="Root 2"
												disabled={!data.root1}
												onChange={(e) => handleRootChange(e, 'root2')}
											>
												<MenuItem value={''}>None</MenuItem>
												<MenuItem
													value={'Will'}
													disabled={data.root1 === 'Will'}
												>
													Will
												</MenuItem>
												<MenuItem
													value={'Perception'}
													disabled={data.root1 === 'Perception'}
												>
													Perception
												</MenuItem>
												<MenuItem
													value={'Power'}
													disabled={data.root1 === 'Power'}
												>
													Power
												</MenuItem>
												<MenuItem
													value={'Forte'}
													disabled={data.root1 === 'Forte'}
												>
													Forte
												</MenuItem>
												<MenuItem
													value={'Agility'}
													disabled={data.root1 === 'Agility'}
												>
													Agility
												</MenuItem>
												<MenuItem
													value={'Speed'}
													disabled={data.root1 === 'Speed'}
												>
													Speed
												</MenuItem>
											</Select>
										</FormControl>
									</React.Fragment>
								)
							}
							if (field === 'name' && formAttribute === 'stats') {
								return (
									<TextField
										key={i}
										disabled
										label={capitalize(field)}
										value={data[field]}
										variant="outlined"
										onChange={(e) => handleValuesChange(e, field)}
									/>
								)
							}
							return (
								<TextField
									key={i}
									label={capitalize(field)}
									value={data[field]}
									variant="outlined"
									multiline
									onChange={(e) => handleValuesChange(e, field)}
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
