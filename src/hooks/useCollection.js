import { useState, useEffect } from "react";
import {db} from '../firebase/config'
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

export const useCollection = (c) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    let ref = collection(db, c)

    const q = query(ref, orderBy('titlePl', 'asc'))

    const unsub = onSnapshot(q, (snapshot) => {
      let results = []

      snapshot.forEach((doc) => {
        results.push({...doc.data(), id: doc.id})
      })
      setData(results)
    })
    return () => unsub()
  }, [c])

  return {data}
}