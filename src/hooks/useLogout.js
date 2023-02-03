import { signOut } from "firebase/auth";
import { auth } from '../firebase/config';
import { useState, useEffect } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

  const {dispatch} = useAuthContext()

  const logout = async () => {
    setError(null)
    setIsPending(true)
    
    try {
      await signOut(auth)
      dispatch({type: 'LOGOUT'})
      
      if(!isCancelled){
        setError(null)
        setIsPending(false)
      }
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

  return {error, isPending, logout}
}