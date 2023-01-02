//styles
import './Navbar.css'

//router
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <ul>
        <li className='title'>Filmy</li>
        <li><Link to='/login'>zaloguj</Link></li>
        <li><Link to='/signup'>zarejestruj</Link></li>
      </ul>
    </nav>
  )
}
