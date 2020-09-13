import React, {useEffect, useContext} from 'react'
import {Redirect} from 'react-router-dom'
import {MovieDataProvider} from './movies/MovieDataContext'
import MovieForm from './movies/component/MovieForm.js'
import MovieListsSmallCard from './movies/MovieListsSmallCard.js'
import {LoginDataContext} from './login/LoginDataContext'

const MoviesManagement = () => {
	const [,,,,loggedIn, setLoggedIn] = useContext(LoginDataContext)

	if(loggedIn.status == true){
		return(
			<>
				<h1>Kelola Film</h1>
				<MovieDataProvider>
					<MovieForm/>
					<MovieListsSmallCard/>
				</MovieDataProvider>
			</>
		)
	}else{
		return <Redirect to='/login' />
	}
}

export default MoviesManagement
