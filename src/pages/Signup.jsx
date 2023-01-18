import { useState } from 'react'

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
    <form 
      className='signup-form'
      onSubmit={handleSubmit}
    >
      {error && <p>{error}</p>}
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
      <label>
        <span>nazwa użykownika:</span>
        <input 
          type="text"
          onChange={(e) => {setDisplayName(e.target.value)}}
          value={displayName}
          required
        />
      </label>
      <button className='btn-submit'>Wyślij</button>
    </form>
  )
}
