import React from 'react'
import {Switch, Route} from 'react-router'
import Index from './pages/Index'
import About from './pages/About'
import Contact from './pages/Contact'
import MovieIndex from './pages/MovieIndex'
import ManageMovie from './pages/MoviesManagement'
import LoginForm from './pages/LoginForm'
import Logout from './pages/login/LogoutProcess'

const Routes = () => {
	return(
		<Switch>
			<Route exact path="/" component={Index}></Route>
			<Route exact path="/index" component={Index}></Route>
			<Route exact path="/about" component={About}></Route>
			<Route exact path="/contact" component={Contact}></Route>
			<Route exact path="/movies" component={MovieIndex}></Route>
			<Route exact path="/manage-movies" component={ManageMovie}></Route>
			<Route exact path="/login" component={LoginForm}></Route>
			<Route exact path="/logout" component={Logout}></Route>
		</Switch>
	)
}
export default Routes
