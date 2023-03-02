import { useState, useEffect } from 'react'

// styles
import './Movie.css'

// router
import { useParams } from 'react-router-dom'

// firebase
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase/config'
import Navbar from '../components/Navbar'


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
    { movie && (
      <div>
        <Navbar />
        <div className='movie-display-box'>
          <p className='movie-display-box-title'>"{movie.titlePl}"</p>
          {/* <img src={movie.cover} alt={movie.titleEng} /> */}
          <div className='description-box'>
            <span>{movie.titleEng} /</span>
            <span>{movie.year} /</span>
            <span>{movie.genre} /</span>
          </div>
          {/* <iframe 
            className='iframe-box'
            src={movie.iframe}
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen
            ></iframe> */}
        </div>  
      </div>
    )}
    </div>
  )
}
