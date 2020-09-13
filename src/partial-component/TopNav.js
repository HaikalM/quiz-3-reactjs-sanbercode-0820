import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/css/component/TopNav.css'

const TopNav = () => {
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
					<Link to='/movies'>Movies</Link>
				</ul>
			</nav>
		</header>
	)
}

export default TopNav
