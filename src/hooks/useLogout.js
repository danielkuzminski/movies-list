import { signOut } from "firebase/auth";
import { auth } from '../firebase/config';
import { useState } from "react";

export const useLogout = () => {
  const [error, setError] = useState(null)

  const logout = async () => {
    
    try {
      setError(null)
      await signOut(auth)
      console.log('wylogowano');
    }
    catch(err){
      console.log(err.message);
      setError(err.message)
    }
  }

  return {error, logout}
}