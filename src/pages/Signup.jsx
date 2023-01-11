import { useState } from 'react'

// styles
import './Signup.css'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <form className='signup-form'>
      <h2>Zarejestruj się</h2>
      <label>
        <span>email:</span>
        <input 
          type="email"
          onChange={(e) => {setEmail(e.target.value)}}
          value={email}
          required
        />
      </label>
      <label>
        <span>hasło:</span>
        <input 
          type="password"
          onChange={(e) => {setPassword(e.target.value)}}
          value={password}
          required
         />
      </label>
      <button className='btn-signup'>Wyślij</button>
    </form>
  )
}
