import { useState } from "react";
import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)

  const signup = async (email, password, displayName) => {
    setError(null)
    setIsPending(true)

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
      setIsPending(false)

      // updating profile with displayName WORKING!!
      await updateProfile( res.user, {'displayName': displayName})

      console.log(res.user);
    }
    catch (err){
      console.log(err.message)
      setError(err.message)
      setIsPending(false)
    }
  }
  return {error, isPending, signup}
}