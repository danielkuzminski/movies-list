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
        <li className='nav-action'><Link to='/login'>zaloguj</Link></li>
        <li className='nav-action'><Link to='/signup'>zarejestruj</Link></li>
        <li className='nav-action clickable' onClick={logout} >wyloguj</li>
      </ul>
    </nav>
  )
}
