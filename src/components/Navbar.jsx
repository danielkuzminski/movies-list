import { useState } from 'react'

//styles
import './Navbar.css'

//router
import { NavLink, Link } from 'react-router-dom'

//hooks
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

export default function Navbar() {

  const {logout} = useLogout()

  const {user} = useAuthContext()

  return (
    <nav className='navbar'>
      <ul>
        <span className='to-left'>Witaj, {user.displayName}. Co dzisiaj robimy?</span>
        {user && (
          <>
            <span className='nav-action clickable'>Szukamy</span>
            <li className='nav-action clickable'><NavLink className='link-color' to='/add_movie'>Dodajemy</NavLink></li>
            <li className='nav-action clickable'><NavLink className='link-color' to='/'>Filmy</NavLink></li>
            <li className='clickable logout' onClick={logout} >wyloguj</li>
          </>
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
