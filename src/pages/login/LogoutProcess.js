import React, {useEffect, useContext} from 'react'
import {Redirect} from 'react-router-dom'
import {LoginDataContext} from './LoginDataContext'

const LogoutProcess = () => {
	const [,,,,loggedIn, setLoggedIn] = useContext(LoginDataContext)

	useEffect(() => {
		if(loggedIn.status == true){
			setLoggedIn({status: false, username: ''})
		}
	})

	return <Redirect to='/index' />
}

export default LogoutProcess
