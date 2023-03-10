import { useState } from 'react'

//styles
import './Navbar.css'

//router
import { Link } from 'react-router-dom'

//hooks
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

export default function Navbar() {

  const {logout} = useLogout()

  const {user} = useAuthContext()

  return (
    <nav className='navbar'>
      <ul>
        <li className='title'><Link to={'/'}>Filmy</Link></li>
        {!user && (
          <>
            <li className='nav-action'><Link to='/login'>zaloguj</Link></li>
            <li className='nav-action'><Link to='/signup'>zarejestruj</Link></li>
          </>
        )}
        {user && (
          <>
            <li className='nav-action'>Witaj, {user.displayName} :)</li>
            <li className='clickable' onClick={logout} ><ion-icon className='logout-icon' name="log-out-outline"></ion-icon></li>
          </>
          )}
      </ul>
    </nav>
  )
}
