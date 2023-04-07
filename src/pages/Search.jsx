import { useCollection } from "../hooks/useCollection"
import { useState } from "react"


export default function Search() {
    const [search, setSearch] = useState('')
    const {data: movies} = useCollection('movies')
    
    // console.log(movies)
    const filteredFilms = (search, movies) => {
        if(!search){
            return movies
        }
        return movies.filter(film => film.titlePl.toLowerCase().includes(search))
    }
    const filteredMovies = filteredFilms(search, movies)

    console.log(filteredMovies)

  return (
    <div>
        <h1>wtf</h1>
        <input 
            type="text"
            onChange={(e) => {
                setSearch(e.target.value.toLowerCase())
            }}
            value={search}
            />
            {search && movies && filteredMovies.map(movie => (
                <div key={movie.id}>{movie.titlePl}</div>
            ))}
    </div>

  )
}
