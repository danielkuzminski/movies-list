//react
import { useState } from 'react'

//styles
import './Navbar.css'

//router
import { NavLink, Link } from 'react-router-dom'

//hooks
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

//components
import NavbarDropdown from './NavbarDropdown'


export default function Navbar() {

  const {logout} = useLogout()

  const {user} = useAuthContext()

  //showing dropdown menu
  const [show, setShow] = useState(false)

  const showElement = () => {
    setShow(!show)
  }

  return (
    <nav className='navbar'>
      <ul>
        <span className='to-left'>Witaj, {user.displayName}. Co dzisiaj robimy?</span>
        {user && (
          <div>
            <li className='nav-action clickable'>Szukamy</li>
            <li className='nav-action clickable'><NavLink className='link-color' to='/add_movie'>Dodajemy</NavLink></li>
            <li className='nav-action clickable'><NavLink className='link-color' to='/'>Filmy</NavLink></li>
            <li className='clickable logout' onClick={logout} >wyloguj</li>
            <div className='hamburger' onClick={showElement}>
              <span className='hamburger-bar'></span>
              <span className='hamburger-bar'></span>
              <span className='hamburger-bar'></span>
            </div>
            {show && <NavbarDropdown showElement={showElement} />}
          </div>
          )}
          {!user && (
            <>
              <li className='nav-action'><Link to='/login'>zaloguj</Link></li>
              <li className='nav-action'><Link to='/signup'>zarejestruj</Link></li>
            </>
          )}
      </ul>
    </nav>
  )
}
