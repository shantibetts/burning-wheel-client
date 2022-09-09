import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { HashRouter } from 'react-router-dom'
import { CharactersContextProvider } from './context/CharactersContext'
import { AuthContextProvider } from './context/AuthContext'
import { DisplayContextProvider } from './context/DisplayContext'
import { FormContextProvider } from './context/FormContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<DisplayContextProvider>
			<AuthContextProvider>
				<CharactersContextProvider>
					<FormContextProvider>
						<HashRouter>
							<App />
						</HashRouter>
					</FormContextProvider>
				</CharactersContextProvider>
			</AuthContextProvider>
		</DisplayContextProvider>
	</React.StrictMode>
)
