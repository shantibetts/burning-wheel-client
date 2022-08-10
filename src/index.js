import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { HashRouter } from 'react-router-dom'
import { CharactersContextProvider } from './context/CharactersContext'
import { AuthContextProvider } from './context/AuthContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<AuthContextProvider>
			<CharactersContextProvider>
				<HashRouter>
					<App />
				</HashRouter>
			</CharactersContextProvider>
		</AuthContextProvider>
	</React.StrictMode>
)
