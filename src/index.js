import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { HashRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<HashRouter>
			<GoogleOAuthProvider clientId="958365875852-85hoibtbln5947icth0q1650fu5th0nj.apps.googleusercontent.com">
				<App />
			</GoogleOAuthProvider>
		</HashRouter>
	</React.StrictMode>
)
