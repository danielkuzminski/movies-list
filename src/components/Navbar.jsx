//styles
import './Navbar.css'

//router
import { Link } from 'react-router-dom'

//hooks
import { useLogout } from '../hooks/useLogout'

export default function Navbar() {

  const {logout} = useLogout()

  return (
    <nav className='navbar'>
      <ul>
        <li className='title'>Filmy</li>
        <li><Link to='/login'>zaloguj</Link></li>
        <li><Link to='/signup'>zarejestruj</Link></li>
        <li onClick={logout} ><Link>wyloguj</Link></li>
      </ul>
    </nav>
  )
}
