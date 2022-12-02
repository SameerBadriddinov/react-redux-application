import axios from './api'

const AuthService = {
	async userRegister(user) {
		const response = await axios.post('/users', {user})

		return response.data
	},
	async userLogin() {
		// const response = await axios.post('/users/login')
	},
	async getUser() {
		// const response = await axios.get('/user')
	},
}

export default AuthService
