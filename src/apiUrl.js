let apiUrl
const apiUrls = {
	production: 'https://git.heroku.com/burning-wheel-community-api.git',
	development: 'http://localhost:8080'
	// development: 'https://vast-tundra-01728.herokuapp.com'
}

if (window.location.hostname === 'localhost') {
	apiUrl = apiUrls.development
} else {
	apiUrl = apiUrls.production
}

export default apiUrl
