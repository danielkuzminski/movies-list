//styles
import './NavbarDropdown.css'

//react
import {useState} from 'react'

//router
import { NavLink } from 'react-router-dom'

//hooks
import { useLogout } from '../hooks/useLogout'

export default function NavbarDropdown({showElement}) {
    const {logout} = useLogout()


  return (
    <div className='dropdown-container'>
        <button onClick={showElement}>&times;</button>
        <NavLink to='#' onClick={showElement}>Szukamy</NavLink>
        <span>a może...</span>
        <NavLink to='/add_movie' onClick={showElement}>Dodajemy</NavLink>
        <span>lub przeglądamy nasze...</span>
        <NavLink to='/movies' onClick={showElement}>Filmy</NavLink>
        <span>czy jednak wracamy do...</span>
        <NavLink to='/' onClick={showElement}>Wybierania</NavLink>
        <span>albo po prostu...</span>
        <span>do nastepnego razu?</span>
        <NavLink onClick={logout}><p className='bye' onClick={showElement}>Wyloguj</p></NavLink>
    </div>
  )
}
