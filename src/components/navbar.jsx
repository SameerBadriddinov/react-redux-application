import {useDispatch, useSelector} from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import {logo} from '../constants'
import {removeItem} from '../helpers/persistance-storage'
import {logoutUser} from '../slice/auth'

const Navbar = () => {
	const {loggedIn, user} = useSelector(state => state.auth)
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const logoutHandler = () => {
		dispatch(logoutUser())
		removeItem('token')
		navigate('/login')
	}

	return (
		<div className='d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom container pt-3'>
			<Link to={'/'}>
				<img src={logo} alt='' />
			</Link>

			<nav className='d-inline-flex mt-2 mt-md-0 ms-md-auto'>
				{loggedIn ? (
					<>
						<p className='me-3 py-2 m-0 text-dark text-decoration-none'>{user.username}</p>
						<Link className='me-3 py-2 text-dark text-decoration-none' to={'/create-article'}>
							create article
						</Link>
						<button className='btn btn-outline-danger' onClick={logoutHandler}>
							Logout
						</button>
					</>
				) : (
					<>
						<Link className='me-3 py-2 text-dark text-decoration-none' to={'/login'}>
							Login
						</Link>
						<Link className='me-3 py-2 text-dark text-decoration-none' to={'/register'}>
							Register
						</Link>
					</>
				)}
			</nav>
		</div>
	)
}

export default Navbar
