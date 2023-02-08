import { useState, useEffect } from 'react'

// styles
import './Movie.css'

// router
import { useParams } from 'react-router-dom'

// firebase
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase/config'


export default function Movie() {
  const {id} = useParams()

  const [movie, setMovie] = useState(null)

  useEffect(() => {
    let ref = doc(db, 'movies', id)

    getDoc(ref)
    .then((snapshot) => {
      setMovie(snapshot.data())
    })

  }, [id])


  return (
    <div>
      {movie && movie.titlePl}
    </div>
  )
}
