import React, {useState, useEffect} from 'react'
import FullWidthCardComponent from './movies/component/FullWidthCardComponent'
import '../styles/css/component/MovieCardFullwidth.css'
import axios from 'axios'

const MovieIndex = () => {
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
						<FullWidthCardComponent key={index} data={data}/>
					)
				})}
			</div>
		</>
	)
}

export default MovieIndex
