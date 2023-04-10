//react
import { useState } from 'react'

//styles
import './Navbar.css'

//router
import { NavLink } from 'react-router-dom'

//hooks
import { useAuthContext } from '../hooks/useAuthContext'
import { useLogout } from '../hooks/useLogout'

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
        <span className='to-left'>Witaj {user.displayName}. Co dzisiaj robimy?</span>
        <div className='hamburger' onClick={showElement}>
              <span className='hamburger-bar'></span>
              <span className='hamburger-bar'></span>
              <span className='hamburger-bar'></span>
        </div>
        {show && <NavbarDropdown showElement={showElement} />}
        <ul className='to-right'>
          <li>
            <NavLink to='/'>główna</NavLink>
          </li>
          <li>
            <NavLink to='/search'>szukaj</NavLink>
          </li>
          <li>
            <NavLink to='/add_movie'>dodaj</NavLink>
          </li>
          <li>
            <NavLink onClick={logout}><span className='nav-logout' >wyloguj</span></NavLink>
          </li>
        </ul>
    </nav>
  )
}