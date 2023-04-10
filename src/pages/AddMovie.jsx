//react
import { useState } from "react"

//router
import { useNavigate } from "react-router-dom"

//styles
import "./AddMovie.css"

//firebase
import { db } from "../firebase/config"
import { collection, addDoc } from "firebase/firestore"
import Navbar from "../components/Navbar"

export default function AddMovie() {
	const [titlePl, setTitlePl] = useState("")
	const [titleEng, setTitleEng] = useState("")
	const [wallpaper, setWallpaper] = useState("")
	const [genre, setGenre] = useState([])
	const [year, setYear] = useState(null)
	const [iframe, setIframe] = useState("")
	const [cover, setCover] = useState("")

	const navigate = useNavigate()

	const resetForm = () => {
		setTitlePl("")
		setTitleEng("")
		setWallpaper("")
		setGenre([])
		setYear(null)
		setIframe("")
		setCover("")
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		let ref = collection(db, "movies")

		await addDoc(ref, {
			titlePl: titlePl,
			titleEng: titleEng,
			wallpaper: wallpaper,
			genre: genre,
			year: year,
			iframe: iframe,
			cover: cover,
		})

		resetForm()

		navigate("/movies")
	}

	return (
		<>
			<Navbar />
			<form className='add-movie-form' onSubmit={handleSubmit}>
				<h1>Dodaj film</h1>
				<label>
					<input
						type='text'
						required
						onChange={(e) => {
							setTitlePl(e.target.value)
						}}
						value={titlePl}
					/>
					<span>polski tytuł</span>
				</label>
				<label>
					<input
						type='text'
						required
						onChange={(e) => {
							setTitleEng(e.target.value)
						}}
						value={titleEng}
					/>
					<span>oryginalny tytuł</span>
				</label>
				<label>
					<input
						type='text'
						required
						onChange={(e) => {
							setWallpaper(e.target.value)
						}}
						value={wallpaper}
					/>
					<span>link do obrazka</span>
				</label>
				<label>
					<input
						type='number'
						required
						onChange={(e) => {
							setYear(e.target.value)
						}}
						value={year}
					/>
					<span>rok wydania</span>
				</label>
				<label>
					<input
						type='text'
						required
						onChange={(e) => {
							setCover(e.target.value)
						}}
						value={cover}
					/>
					<span>okładka</span>
				</label>
				<label>
					<input
						type='text'
						required
						onChange={(e) => {
							setIframe(e.target.value)
						}}
						value={iframe}
					/>
					<span>link trailera na yt</span>
				</label>
				<label>
					<input
						type='text'
						required
						onChange={(e) => {
							setGenre(e.target.value)
						}}
						value={genre}
					/>
					<span>gatunek</span>
				</label>
				<button className='btn-add'>Prześlij</button>
			</form>
		</>
	)
}
