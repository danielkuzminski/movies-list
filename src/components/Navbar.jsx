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

        <span className='to-left'>Witaj {user.displayName}. Co dzisiaj robimy?</span>
        {user && (
          <div className='to-right'>
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

    </nav>
  )
}
