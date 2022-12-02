import {configureStore} from '@reduxjs/toolkit'
import AuthReducer from '../slice/auth'

export default configureStore({
	reducer: {
		auth: AuthReducer,
	},
	devTools: process.env.NODE_ENV !== 'production',
})
