import axios from './api'

const AuthService = {
	async userRegister(user) {
		const {data} = await axios.post('/users', {user})
		return data
	},
	async userLogin(user) {
		const {data} = await axios.post('/users/login', {user})
		return data
	},
	async getUser() {
		// const response = await axios.get('/user')
	},
}

export default AuthService
