import { useState, useEffect } from "react"

// styles
import "./Movie.css"

// router
import { useParams } from "react-router-dom"

// firebase
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase/config"
import Navbar from "../components/Navbar"

export default function Movie() {
	const { id } = useParams()

	const [movie, setMovie] = useState(null)

	useEffect(() => {
		let ref = doc(db, "movies", id)

		getDoc(ref).then((snapshot) => {
			setMovie(snapshot.data())
		})
	}, [id])

	return (
		<div>
			{movie && (
				<div>
					<Navbar />
					<div className='movie-display-box'>
						<div className='movie-card-full'>
							<span className='title-pl'>{movie.titlePl}</span>
							<a
								className='trailer'
								href={movie.iframe}
								target='_blank'
								rel='noreferrer'>
								<img
									className='movie-cover'
									src={movie.cover}
									alt={movie.titleEng}
								/>
							</a>
							<span className='title-en'>{movie.titleEng}</span>
							<span className='year'>{movie.year}</span>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}
