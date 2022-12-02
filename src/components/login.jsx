import {useState} from 'react'
import {icon} from '../constants'
import {Input} from '../ui'
import {useSelector, useDispatch} from 'react-redux'
import {loginUserStart} from '../slice/auth'

const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const dispatch = useDispatch()
	const {isLoading} = useSelector(state => state.auth)

	const loginHandler = e => {
		e.preventDefault()
		dispatch(loginUserStart())
	}

	return (
		<div className='text-center mt-5'>
			<main className='form-signin w-25 m-auto'>
				<form>
					<img className='mb-2' src={icon} alt='' width='72' height='60' />
					<h1 className='h3 mb-3 fw-normal'>Please login</h1>

					<Input label={'Email address'} state={email} setState={setEmail} />
					<Input label={'Password'} type={'password'} state={password} setState={setPassword} />

					<button className='w-100 btn btn-lg btn-primary mt-2' disabled={isLoading} onClick={loginHandler} type='submit'>
						{isLoading ? 'loading...' : 'Login'}
					</button>
				</form>
			</main>
		</div>
	)
}

export default Login
