import { createContext, useReducer } from 'react'
import { createEmptyFormData } from '../Components/Utils'

// FormContext exported to be available to any children of Character
export const FormContext = createContext()

// FormReducer sets state based on switch function
export const formReducer = (state, action) => {
	const newState = { ...state }
	switch (action.type) {
		case 'NEW':
			newState.formOpen = true
			newState.formType = 'NEW'
			newState.formAttribute = action.payload.formAttribute
			newState.formFields = action.payload.formFields
			return newState
		case 'EDIT':
			newState.formOpen = true
			newState.formType = 'EDIT'
			newState.formAttribute = action.payload.formAttribute
			newState.formFields = action.payload.formFields
			newState.formData = action.payload.formData
			return newState
		case 'CLOSE':
			newState.formOpen = false
			newState.formType = ''
			newState.formAttribute = ''
			newState.formFields = []
			newState.formData = createEmptyFormData()
			return newState
		default:
			return state
	}
}

// FormContextProvider provides Form Context to all children (of app)
export const FormContextProvider = ({ children }) => {
	const [state, formDispatch] = useReducer(formReducer, {
		formOpen: false,
		formType: '',
		formAttribute: '',
		formFields: [],
		formData: createEmptyFormData()
	})

	return (
		<FormContext.Provider value={{ ...state, formDispatch }}>
			{children}
		</FormContext.Provider>
	)
}
