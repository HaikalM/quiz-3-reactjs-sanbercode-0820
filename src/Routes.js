import React from 'react'
import {Switch, Route} from 'react-router'
import Index from './pages/Index'
import About from './pages/About'
import Contact from './pages/Contact'
import MovieIndex from './pages/MovieIndex'

const Routes = () => {
	return(
		<Switch>
			<Route exact path="/" component={Index}></Route>
			<Route exact path="/index" component={Index}></Route>
			<Route exact path="/about" component={About}></Route>
			<Route exact path="/contact" component={Contact}></Route>
			<Route exact path="/movies" component={MovieIndex}></Route>
		</Switch>
	)
}
export default Routes
