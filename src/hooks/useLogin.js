import { useState } from "react"
import { auth } from "../firebase/config"
import { signInWithEmailAndPassword } from "firebase/auth"

export const useLogin = () => {
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)

  const login = async (email, password) => {
    setError(null)
    setIsPending(true)

    try {
      await signInWithEmailAndPassword(auth, email, password)
      setIsPending(false)
      console.log('zalogowano');
    }
    catch(err){
      console.log(err.message);
      setError(err.message)
      setIsPending(false)
    }

  }

  return {error, isPending, login}
}