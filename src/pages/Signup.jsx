import { useState } from 'react'
import { Link } from 'react-router-dom'

// hooks
import { useSignup } from '../hooks/useSignup'

// styles
import './Signup.css'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')

  const {error, isPending, signup} = useSignup()

  const resetForm = () => {
    setEmail('')
    setPassword('')
    setDisplayName('')
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    signup(email,password, displayName)

    console.log(email,password,displayName);

    resetForm()
  }

  return (
    <section className='form-box'>
    <form 
      className='signup-form'
      onSubmit={handleSubmit}
    >
      {error && <p className='error-msg'>{error}</p>}
      <h2>Zarejestruj się</h2>
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
      </label>
      <label>
        <ion-icon name="person-circle-outline"></ion-icon>
        <input 
          placeholder='Nazwa użykownika...'
          className='signup-input'
          type="text"
          onChange={(e) => {setDisplayName(e.target.value)}}
          value={displayName}
          required
        />
      </label>
      {!isPending && <button className='btn-submit'>Wyślij</button>}
      {isPending && <button className='btn-submit' disabled >Wysyłam</button>}
      <Link to='/login' className='signup-link extend'><ion-icon name="arrow-forward-outline"></ion-icon>Wpisz się</Link>
    </form>
    </section>
  )
}
