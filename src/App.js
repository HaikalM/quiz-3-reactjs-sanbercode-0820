import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import TopNav from './partial-component/TopNav.js'
import Footer from './partial-component/Footer.js'
import Routes from './Routes'

import logo from './logo.svg';
import './styles/css/App.css';

function App() {
  return (
		<Router>
			<TopNav/>
			<section>
				<Routes/>
			</section>
			<Footer/>
		</Router>
  );
}

export default App;
