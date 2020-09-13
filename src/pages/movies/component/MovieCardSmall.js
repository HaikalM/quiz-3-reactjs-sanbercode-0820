import React, {useState} from 'react'

const MovieCardSmall = props => {
	const [moviesData1, setMoviesData1] = useState([
		{
			id: 1237,
			title: 'James Bond',
			image_url: 'https://www.reportdoor.com/wp-content/uploads/2020/06/No-Time-to-Die-Daniel-Craigs-James-Bond-Movie-Gets-990x550.jpg',
			description: 'Adipisicing illo neque aperiam ullam ut. Expedita impedit reprehenderit magnam rem exercitationem! Sit ratione obcaecati consequatur ea dolorem. Quidem laudantium quasi ipsa omnis architecto. Ea quasi cumque est veniam soluta',
			rating: 9,
			duration: 120,
			genre: 'action'
		}, {
			id: 1233,
			title: 'Waluh Bajarang',
			image_url: 'https://www.reportdoor.com/wp-content/uploads/2020/06/No-Time-to-Die-Daniel-Craigs-James-Bond-Movie-Gets-990x550.jpg',
			description: 'Adipisicing illo neque aperiam ullam ut. Expedita impedit reprehenderit magnam rem exercitationem! Sit ratione obcaecati consequatur ea dolorem. Quidem laudantium quasi ipsa omnis architecto. Ea quasi cumque est veniam soluta',
			rating: 9,
			duration: 120,
			genre: 'action'
		}
	])
	const [input, setInput] = useState({
		id: null,
		image_url: '',
		title: '',
		duration: 120,
		genre: '',
		year: 2020,
		description: '',
		rating: 0
	})

	const handleEdit = (e) => {
		let movieId = parseInt(e.target.value)
		let selectedMovie = moviesData1.find(item => item.id == movieId)

		console.log("edit : " + movieId)
		console.log("name : " + selectedMovie.name)
		console.log(moviesData1[movieId])
	}

	const handleDestroy = (e) => {
		let movieId = e.target.value
		console.log("destroy : " + movieId)
	}
	return(
		<div className="movie-card-small">
			<img className="movie-thumbnail" src={props.data.image_url} alt={props.data.name} width='200px'/>
			<div className="movie-information">
				<div className="title-section">
					<div className="movie-title">{props.data.title}</div>
					<div className="movie-rating">{parseFloat(props.data.rating)}</div>
				</div>
				<div className="movie-overview">
					<div className="movie-genre">{props.data.genre}</div>
					<div className="movie-duration">
						<b className="color-555">Duration:</b> {parseInt(props.data.duration/60)} Hour
					</div>
				</div>
				<div className="movie-description">
					<b className="color-555">Description: </b>
					{props.data.description.substring(0, 100)}
				</div>
				<div className="movie-action">
					<button value={props.data.id} onClick={handleEdit} className="btn btn-primary mr-2">Edit</button>
					<button value={props.data.id} onClick={handleDestroy} className="btn btn-link-danger">Delete</button>
				</div>
			</div>
		</div>
	)

}

export default MovieCardSmall
