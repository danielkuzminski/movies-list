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
			<Navbar />
			{movie && (
				<div className="movie-container">
					<div className='movie-display-box'>
						<div className="display-box-left">
							<span className='title-pl'>{movie.titlePl}</span>
							<span className='title-en'>{movie.titleEng} ({movie.year})</span>
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui est minima aliquam sunt odit distinctio provident ab tempora explicabo dignissimos.</p>
							<a
								className='trailer'
								href={movie.iframe}
								target='_blank'
								rel='noreferrer'>zobacz trailer</a>
						</div>
						<div className="display-box-right">
							<img
								className='movie-cover'
								src={movie.cover}
								alt={movie.titleEng}
							/>

						</div>
							
					</div>
				</div>
			)}
		</div>
	)
}
