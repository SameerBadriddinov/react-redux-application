import {Routes, Route} from 'react-router-dom'
import {Main, Login, Register} from './components'

const App = () => {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
			</Routes>
		</div>
	)
}

export default App
