import { useState, useEffect } from "react";
import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const {dispatch} = useAuthContext()

  const signup = async (email, password, displayName) => {
    setError(null)
    setIsPending(true)

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)

      if(!isCancelled){
        setIsPending(false)
      }

      // updating profile with displayName WORKING!!
      await updateProfile( res.user, {'displayName': displayName})

      dispatch({type: 'LOGIN', payload: res.user})

      console.log(res.user);
    }
    catch (err){
      console.log(err.message)
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

  return {error, isPending, signup}
}