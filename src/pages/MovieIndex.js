import React, {useState, useEffect} from 'react'
import axios from 'axios'
import MovieCard from './Movies/component/MovieCard'
import '../styles/css/component/MovieLists.css'

const MovieIndex = () => {
	const moviesData1 = [{
		title: 'James Bond',
		image_url: 'https://www.reportdoor.com/wp-content/uploads/2020/06/No-Time-to-Die-Daniel-Craigs-James-Bond-Movie-Gets-990x550.jpg',
		description: 'Adipisicing illo neque aperiam ullam ut. Expedita impedit reprehenderit magnam rem exercitationem! Sit ratione obcaecati consequatur ea dolorem. Quidem laudantium quasi ipsa omnis architecto. Ea quasi cumque est veniam soluta',
		rating: 9,
		duration: 120,
		genre: 'action'
	}]
	const [moviesData, setMoviesData] = useState([])

	useEffect( () => {
		if(moviesData.length === 0){
			axios.get(`http://backendexample.sanbercloud.com/api/movies`)
			.then(res=>{
				setMoviesData(res.data)
			})
		}
	})

	return(
		<>
			<h1>Daftar Film Terbaik</h1>
			<div className="movies-container">
				{moviesData.map((data, index) => {
					return(
						<MovieCard key={index} data={data}/>
					)
				})}
			</div>
		</>
	)
}

export default MovieIndex
