import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import TopNav from './partial-component/TopNav.js'
import Footer from './partial-component/Footer.js'
import Routes from './Routes'
import {LoginDataProvider} from './pages/login/LoginDataContext'

//import logo from './logo.svg';
import './styles/css/App.css';

function App() {
  return (
		<LoginDataProvider>
			<Router>
				<TopNav/>
				<section>
					<Routes/>
				</section>
			</Router>
		</LoginDataProvider>
  );
}

export default App;
