import React, {useState, useEffect, createContext} from 'react'
import axios from 'axios'
export const MovieDataContext = createContext()

export const MovieDataProvider = (props) => {
	const [moviesData, setMoviesData] = useState([])
	const [dataLoaded, setDataLoaded] = useState('')
	const [movieId, setMovieId] = useState(null)
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

	useEffect( () => {
		if(dataLoaded === ''){
			axios.get(`http://backendexample.sanbercloud.com/api/movies`)
			.then(res=>{
				setMoviesData(res.data)
			})
			setDataLoaded(true)
		}
	})

	return(
		<MovieDataContext.Provider value={[moviesData, setMoviesData, input, setInput, movieId, setMovieId]}>
			{props.children}
		</MovieDataContext.Provider>
	)
}

export default MovieDataProvider
