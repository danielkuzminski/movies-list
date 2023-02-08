// hooks
import { useCollection } from '../hooks/useCollection'

// styles
import './Movies.css'

// router
import { Link } from 'react-router-dom'

export default function Movies() {
  const {data: movies} = useCollection('movies')

  return (
    <div className='movies-container'>
      {movies && movies.map((movie) => (
        <Link to={`/movies/${movie.id}`} className='movie-card' key={movie.id}>
          <p className='movie-title-pl'>"{movie.titlePl}"</p>
          <span className='movie-title-eng'>{movie.titleEng}</span>
          <img src={movie.cover} alt={movie.titlePl} />
        </Link>
      ))}
    </div>
  )
}
