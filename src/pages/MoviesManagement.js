import React, {useState, useEffect} from 'react'
import MovieCardSmall from './movies/component/MovieCardSmall.js'
import MovieForm from './movies/component/MovieForm.js'
import '../styles/css/component/MovieCardSmall.css'
import '../styles/css/component/MovieForm.css'
import axios from 'axios'

const MoviesManagement = () => {
	const [moviesData, setMoviesData] = useState([])
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

	useEffect( () => {
		if(moviesData1.length === 0){
			axios.get(`http://backendexample.sanbercloud.com/api/movies`)
			.then(res=>{
				setMoviesData(res.data)
				console.log(res.data)
			})
		}
	})

	return(
		<>
			<h1>Kelola Film</h1>
			<MovieForm/>
			<div className="movies-container">
				{moviesData1.map((data, index) => {
					return(
						<MovieCardSmall key={index} data={data}/>
					)
				})}
			</div>
		</>
	)

}

export default MoviesManagement
