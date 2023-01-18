import { useState } from 'react'

// hooks
import { useLogin } from '../hooks/useLogin'

// styles
import './Signup.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {error, isPending, login} = useLogin()


  const handleSubmit = (e) => {
    e.preventDefault();

    login(email, password)
  }

  return (
    <form 
      className='signup-form'
      onSubmit={handleSubmit}
    >
      {error && <p className='error-msg'>{error}</p>}
      <h2>Zaloguj się</h2>
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
      {!isPending && <button className='btn-submit'>Wyślij</button>}
      {isPending && <button className='btn-submit' disabled >Wysyłam</button>}
    </form>
  )
}
