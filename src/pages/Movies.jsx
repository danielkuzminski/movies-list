// hooks
import { useCollection } from '../hooks/useCollection'

// styles
import './Movies.css'

export default function Movies() {
  const {data: movies} = useCollection('movies')

  return (
    <div className='movies-container'>
      {movies && movies.map((movie) => (
        <div key={movie.id}>
          <h1>{movie.titlePl}</h1>
        </div>
      ))}
    </div>
  )
}
