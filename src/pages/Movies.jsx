// hooks
import { useCollection } from '../hooks/useCollection'

// styles
import './Movies.css'

// router
import { Link } from 'react-router-dom'

//components
import Navbar from '../components/Navbar'

export default function Movies() {
  const {data: movies} = useCollection('movies')

  return (
    <div>
      <Navbar />
      <div className='movies-container'>
        {movies && movies.map((movie) => (
          <Link to={`/movies/${movie.id}`} className='movie-card' key={movie.id}>
            <img src={movie.wallpaper} alt={movie.titlePl} />
            <span className='movie-title-pl'>{movie.titlePl}</span>
            <span className='movie-title-eng'>{movie.titleEng} ({movie.year})</span>
          </Link> ))}
      </div>
      </div>
  )
}
