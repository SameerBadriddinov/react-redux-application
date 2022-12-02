import {useState} from 'react'
import {icon} from '../constants'
import {Input} from '../ui'
import {useSelector, useDispatch} from 'react-redux'
import {registerUserFailure, registerUserStart, registerUserSuccess} from '../slice/auth'
import AuthService from '../service/auth'

const Register = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const dispatch = useDispatch()
	const {isLoading} = useSelector(state => state.auth)

	const loginHandler = async e => {
		e.preventDefault()
		dispatch(registerUserStart())
		const user = {username: name, email, password}
		try {
			const response = await AuthService.userRegister(user)
			console.log(response)
			dispatch(registerUserSuccess())
		} catch (error) {
			dispatch(registerUserFailure())
		}
	}

	return (
		<div className='text-center mt-5'>
			<main className='form-signin w-25 m-auto'>
				<form>
					<img className='mb-2' src={icon} alt='' width='72' height='60' />
					<h1 className='h3 mb-3 fw-normal'>Please register</h1>

					<Input label={'Username'} state={name} setState={setName} />
					<Input label={'Email address'} state={email} setState={setEmail} />
					<Input label={'Password'} type={'password'} state={password} setState={setPassword} />

					<button className='w-100 btn btn-lg btn-primary mt-2' disabled={isLoading} onClick={loginHandler} type='submit'>
						{isLoading ? 'loading...' : 'Register'}
					</button>
				</form>
			</main>
		</div>
	)
}

export default Register
