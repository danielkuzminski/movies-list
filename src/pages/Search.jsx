//firebase
import { useCollection } from "../hooks/useCollection"

//react
import { useState } from "react"

//styles
import "./Search.css"

//components
import Navbar from "../components/Navbar"

//router
import { Link } from "react-router-dom"

export default function Search() {
	const [search, setSearch] = useState("")
	const { data: movies } = useCollection("movies")

	// console.log(movies)
	const filteredFilms = (search, movies) => {
		if (!search) {
			return movies
		}
		return movies.filter((film) =>
			film.titlePl.toLowerCase().includes(search.toLowerCase())
		)
	}
	const filteredMovies = filteredFilms(search, movies)

	// console.log(filteredMovies)

	return (
		<div className="search">
			<Navbar />
			<div className='search-container'>
				<div className='search-display'>
					<h1 className='search-title'>Wyszukaj film</h1>
					<input
						type='text'
						className='search-input'
						onChange={(e) => {
							setSearch(e.target.value.toLowerCase())
						}}
						value={search}
					/>
					{search &&
						movies &&
						filteredMovies.map((movie) => (
							<div className='output-display' key={movie.id}>
								{/* <p className='title-display'>
								<Link to={`/movies/${movie.id}`}>{movie.titlePl.toLowerCase()}</Link>
							</p> */}
								<Link className='search-link' to={`/movies/${movie.id}`}>
									<p className='title-display'>{movie.titlePl.toLowerCase()}</p>
								</Link>
							</div>
						))}
				</div>
			</div>
		</div>
	)
}
