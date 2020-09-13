import React, {useState, useEffect, useContext} from 'react'
import {MovieDataContext} from './MovieDataContext'
import axios from 'axios'
import '../../styles/css/component/MovieCardSmall.css'

const MovieListsSmallCard = (props) => {
	const [moviesData, setMoviesData,,,,] = useContext(MovieDataContext)
	const [,,input, setInput,,] = useContext(MovieDataContext)
	const [,,,,movieId, setMovieId] = useContext(MovieDataContext)

	const handleEdit = (e) => {
		let movieIdValue = parseInt(e.target.value)
		let selectedMovie = moviesData.find(movie => movie.id == movieIdValue)
		setMovieId(movieIdValue)

		setInput({
			image_url: selectedMovie.image_url,
			title: selectedMovie.title,
			duration: selectedMovie.duration,
			genre: selectedMovie.genre,
			year: selectedMovie.year,
			description: selectedMovie.description,
			rating: selectedMovie.rating
		})

		console.log(selectedMovie)
		console.log(input)
	}

	const handleDestroy = (e) => {
		let movieId = parseInt(e.target.value)
		console.log("destroy : " + movieId)
		axios.delete(`http://backendexample.sanbercloud.com/api/movies/${movieId}`)
		.then(res => {
			let newMoviesData = moviesData.filter(movie => movie.id !== movieId)
			setMoviesData([...newMoviesData])
			console.log(res.data);
		})
		setMoviesData([...moviesData])
	}

	return(
		<div className="movies-container-2">
			{moviesData !== null && moviesData.map((data, index) => {
				return(
					<div key={index} className="movie-card-small">
						<img className="movie-thumbnail" src={data.image_url} alt={data.name} width='200px'/>
						<div className="movie-information">
							<div className="title-section">
								<div className="movie-title">{data.title}</div>
								<div className="movie-rating">{parseFloat(data.rating)}</div>
							</div>
							<div className="movie-overview">
								<div className="movie-genre">{data.genre}</div>
								<div className="movie-duration">
									<b className="color-555">Duration:</b> {parseInt(data.duration/60)} Hour
								</div>
							</div>
							<div className="movie-description">
								<b className="color-555">Description: </b>
								{data.description !== null &&
									data.description.substring(0, 20)
								} ...
							</div>
							<div className="movie-action">
								<button value={data.id} onClick={handleEdit} className="btn btn-primary mr-2">Edit</button>
								<button value={data.id} onClick={handleDestroy} className="btn btn-link-danger">Delete</button>
							</div>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default MovieListsSmallCard
