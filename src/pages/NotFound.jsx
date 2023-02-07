import { useEffect } from 'react'

// styles
import './NotFound.css'

// router
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate()

  // navigating to main page
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/')
    }, 5000)
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className='not-found-container'>
      <h1>404</h1>
      <p>Strona o podanym adresie nie istnieje. Za 5 sekund nastąpi przekierowanie na stronę główną</p>
    </div>
  )
}
