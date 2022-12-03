import {createSlice} from '@reduxjs/toolkit'
import {setItem} from '../helpers/persistance-storage'

const initialState = {
	isLoading: false,
	loggedIn: false,
	error: null,
	user: null,
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		signUserStart: state => {
			state.isLoading = true
		},
		signUserSuccess: (state, action) => {
			state.loggedIn = true
			state.isLoading = false
			state.user = action.payload
			setItem('token', action.payload.token)
		},
		signUserFailure: (state, action) => {
			state.isLoading = false
			state.error = action.payload
		},
	},
})

export const {signUserFailure, signUserStart, signUserSuccess} = authSlice.actions
export default authSlice.reducer
