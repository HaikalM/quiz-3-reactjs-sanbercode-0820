import React, {useState, useEffect, useContext} from 'react'
import '../../../styles/css/component/MovieForm.css'
import axios from 'axios'
import {MovieDataContext} from '../MovieDataContext'

const MovieForm = () => {
	const [moviesData, setMoviesData,,,,] = useContext(MovieDataContext)
	const [,,input, setInput,,] = useContext(MovieDataContext)
	const [,,,,movieId, setMovieId] = useContext(MovieDataContext)

	const handleChange = (e) => {
		let inputType = e.target.name
		switch(inputType){
			case 'image-url':{
				setInput({...input, image_url: e.target.value})
				break
			}
			case 'title':{
				setInput({...input, title: e.target.value})
				break
			}
			case 'duration':{
				setInput({...input, duration: e.target.value})
				break
			}
			case 'genre':{
				setInput({...input, genre: e.target.value})
				break
			}
			case 'year':{
				setInput({...input, year: e.target.value})
				break
			}
			case 'rating':{
				setInput({...input, rating: e.target.value})
				break
			}
			case 'description':{
				setInput({...input, description: e.target.value})
				break
			}
			default: {break}
		}
		console.log(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if(movieId === null){
			console.log('jalankan input data')
			axios.post(`http://backendexample.sanbercloud.com/api/movies`, {
				image_url: input.image_url,
				title: input.title,
				duration: input.duration,
				genre: input.genre,
				year: input.year,
				description: input.description,
				rating: input.rating
			})
			.then(res => {
				console.log('input data jalan')
				let data = res.data
				setMoviesData([...moviesData, {
					image_url: data.image_url,
					title: data.title,
					duration: data.duration,
					genre: data.genre,
					year: data.year,
					description: data.description,
					rating: data.rating
				}])
				console.log("Waluhbajarang")
				console.log(moviesData)
				setInput({
					id: '',
					image_url: '',
					title: '',
					duration: 120,
					genre: '',
					year: 2020,
					description: '',
					rating: 0
				})
			})
			setMovieId(null)
		}else{
			console.log('jalankan edit data')
			axios.put(`http://backendexample.sanbercloud.com/api/movies/${movieId}`, {
				image_url: input.image_url,
				title: input.title,
				duration: input.duration,
				genre: input.genre,
				year: input.year,
				description: input.description,
				rating: input.rating
			})
			.then(res => {
				console.log('edit data jalan')
				console.log(res)
				console.log(moviesData)
				let newMoviesData = moviesData.map(movie => {
					if(movie.id === movieId){
						movie.image_url = input.image_url
						movie.title = input.title
						movie.duration = input.duration
						movie.genre = input.genre
						movie.year = input.year
						movie.description = input.description
						movie.rating = input.rating
					}
					return movie
				})
				setMoviesData(newMoviesData)
				// lakukan handle ketika sukses
			})
			setInput({
				id: '',
				image_url: '',
				title: '',
				duration: 120,
				genre: '',
				year: 2020,
				description: '',
				rating: 0
			})
			setMovieId(null)
		}
	}

	return(
		<>
			<div className="container">
				<form onSubmit={handleSubmit} className='form-container'>
					<div className="row">
						<div className="col-25">
							<label htmlFor="image-url">Link Cover Film</label>
						</div>
						<div className="col-75">
							<input
								value={input.image_url}
								onChange={handleChange}
								name="image-url"
								type="text" placeholder="Link Cover Film.."/>
						</div>
					</div>
					<div className="row">
						<div className="col-25">
							<label htmlFor="title">Judul Film</label>
						</div>
						<div className="col-75">
							<input
								value={input.title}
								onChange={handleChange}
								name="title"
								type="text" placeholder="Judul Film.."/>
						</div>
					</div>
					<div className="row">
						<div className="col-25">
							<label htmlFor="duration">Durasi</label>
						</div>
						<div className="col-75">
							<input
								value={input.duration}
								onChange={handleChange}
								name="duration"
								type="number" placeholder="Durasi Film.. (menit)"/>
						</div>
					</div>
					<div className="row">
						<div className="col-25">
							<label htmlFor="year">Tahun Tayang</label>
						</div>
						<div className="col-75">
							<input
								value={input.year}
								onChange={handleChange}
								name="year"
								type="number" placeholder="Tahun Tayang"/>
						</div>
					</div>
					<div className="row">
						<div className="col-25">
							<label htmlFor="rating">Rating</label>
						</div>
						<div className="col-75">
							<input
								value={input.rating}
								onChange={handleChange}
								name="rating"
								type="number" placeholder="Rating Film.."/>
						</div>
					</div>
					{/*
					<div className="row">
						<div className="col-25">
							<label htmlFor="genre">Genre</label>
						</div>
						<div className="col-75">
							<select
								value={input.genre}
								onChange={handleChange}
								name="genre">
								<option>Pilih Genre</option>
								<option value="action">Action</option>
								<option value="adventure">Adventure</option>
								<option value="Sci-Fi">Sci-Fi</option>
							</select>
						</div>
					</div>
							*/}
					<div className="row">
						<div className="col-25">
							<label htmlFor="genre">Genre</label>
						</div>
						<div className="col-75">
							<input
								value={input.genre}
								onChange={handleChange}
								name="genre"
								type="text" placeholder="Genre Film.."/>
						</div>
					</div>
					<div className="row">
						<div className="col-25">
							<label htmlFor="description">Deskripsi</label>
						</div>
						<div className="col-75">
							<textarea
								value={input.description}
								onChange={handleChange}
								name="description"
								placeholder="Deskripsi Film.." style={{height:'200px'}}></textarea>
						</div>
					</div>
					<div className="row">
						<div className="col-25">
						</div>
						<div className="col-75">
							<button
							type="submit"
							className="btn btn-white btn-rounded">Kirim</button>
						</div>
					</div>
				</form>
			</div>
		</>
	)
}

export default MovieForm
