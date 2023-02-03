import { useState, useEffect } from "react"
import { auth } from "../firebase/config"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useAuthContext } from "./useAuthContext"

export const useLogin = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const {dispatch} = useAuthContext()

  const login = async (email, password) => {
    setError(null)
    setIsPending(true)

    try {
      const res = await signInWithEmailAndPassword(auth, email, password)

      if(!isCancelled){
        setIsPending(false)
      }

      dispatch({type: 'LOGIN', payload: res.user})

      console.log('zalogowano', res.user);
    }
    catch(err){
      console.log(err.message);
      if(!isCancelled){
        setError(err.message)
        setIsPending(false)
      }
    }

  }

  useEffect(() => {
    return () => {
      setIsCancelled(true)
    }
  }, [])

  return {error, isPending, login}
}