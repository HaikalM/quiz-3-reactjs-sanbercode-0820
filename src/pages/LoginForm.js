import React, {useState, useContext} from 'react'
import {Redirect} from 'react-router-dom'
import {LoginDataContext} from './login/LoginDataContext'

const LoginForm = () => {
	const [account, setAccount,,,,] = useContext(LoginDataContext)
	const [,,input,setInput,,] = useContext(LoginDataContext)
	const [,,,,loggedIn, setLoggedIn] = useContext(LoginDataContext)

	const handleChange = (e) => {
		let value = e.target.value
		let inputType = e.target.name
		switch(inputType){
			case 'username':{
				setInput({...input, username: e.target.value})
				break
			}
			case 'password':{
				setInput({...input, password: e.target.value})
				break
			}
			default: {break}
		}
	}

	const runAuth = (e) => {
		e.preventDefault()
		let username = input.username
		let password = input.password
		if(loggedIn.status === false){
			const selectedAccount = account.find(data => {
				if(data.username === username && data.password === password){
					console.log('berhasil login')
					setLoggedIn({status: true, username: data.username})
					setInput({username: '', password: ''})
				}else{
					console.log('keliru')
				}
			})
		}else{
			console.log('sudah login')
		}
	}

	if(loggedIn.status == false){
		return(
			<>
				<h1>Login</h1>
				<div className="container-login" style={{width: '400px', margin: '0 auto'}}>
					<p><b>Username:</b> haikal1</p>
					<p><b>Password:</b> 123</p>
					<form onSubmit={runAuth} className='form-container'>
						<div className="row">
							<input
								value={input.username}
								style={{marginBottom: '10px'}}
								onChange={handleChange}
								name="username"
								type="text" placeholder="Username.."/>
						</div>
						<div className="row">
							<input
								value={input.password}
								style={{marginBottom: '10px'}}
								onChange={handleChange}
								name="password"
								type="password" placeholder="Password.."/>
						</div>
						<div className="row">
							<button
								style={{width: '100%'}}
								type="submit"
								className="btn btn-primary">Login</button>
						</div>
					</form>
				</div>
			</>
		)
	}else{
		return <Redirect to='/manage-movies' />
	}
}

export default LoginForm
