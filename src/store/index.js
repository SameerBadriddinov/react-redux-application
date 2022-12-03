import {configureStore} from '@reduxjs/toolkit'
import AuthReducer from '../slice/auth'
import ArticleReducer from '../slice/article'

export default configureStore({
	reducer: {
		auth: AuthReducer,
		article: ArticleReducer,
	},
	devTools: process.env.NODE_ENV !== 'production',
})
