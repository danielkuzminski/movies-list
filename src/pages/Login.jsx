import { useState } from 'react'
import { Link } from 'react-router-dom'

// hooks
import { useLogin } from '../hooks/useLogin'

// styles
import './Login.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {error, isPending, login} = useLogin()


  const handleSubmit = (e) => {
    e.preventDefault();

    login(email, password)
  }

  return (
    <section className='form-box'>
    <form 
      className='signup-form'
      onSubmit={handleSubmit}
    >
      {error && <p className='error-msg'>{error}</p>}
      <h2>Zaloguj się</h2>
      <label>
        <ion-icon name="mail-outline"></ion-icon>
        <input 
          placeholder='Email...'
          className='signup-input'
          type="email"
          onChange={(e) => {setEmail(e.target.value)}}
          value={email}
          required
          />
          {/* <span>Email</span> */}
      </label>
      <label>
        <ion-icon name="lock-closed-outline"></ion-icon>
        <input 
          placeholder='Hasło...'
          className='signup-input'
          type="password"
          onChange={(e) => {setPassword(e.target.value)}}
          value={password}
          required
          />
          {/* <span>Hasło</span> */}
      </label>
      {!isPending && <button className='btn-submit'>Wyślij</button>}
      {isPending && <button className='btn-submit' disabled >Wysyłam</button>}
      <Link className='signup-link' to='/signup'><ion-icon name="arrow-forward-outline"></ion-icon>Zarejestruj się</Link>
    </form>
    </section>
  )
}
