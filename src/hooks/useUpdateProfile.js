import { auth } from '../firebase/config'
import { updateProfile } from "firebase/auth";

export const useUpdateProfile = () => {

  const update = async (displayName, photoURL) =>{
    await updateProfile(auth.currentUser, {
      displayName, photoURL
    })
  }
  return {update}
}