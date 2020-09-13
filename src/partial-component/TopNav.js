import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import '../styles/css/component/TopNav.css'
import {LoginDataContext} from '../pages/login/LoginDataContext'

const TopNav = () => {
	const [,,,,loggedIn, setLoggedIn] = useContext(LoginDataContext)

	return(
		<header>
			<div className="header-logo">
				<img src="logo.png" alt="Logo"/>
			</div>
			<nav className="header-menu">
				<ul>
					<Link to='/index'>Home</Link>
					<Link to='/about'>About</Link>
					<Link to='/contact'>Contact</Link>
					{loggedIn.status === true && <Link to='/movies'>Movies</Link> }
					{loggedIn.status === true && <Link to='/manage-movies'>Manage Movies</Link> }
					{loggedIn.status === true && <Link to='/logout'>Logout</Link> }
					{loggedIn.status !== true && <Link to='/login'>Login</Link> }
				</ul>
			</nav>
		</header>
	)
}

export default TopNav
