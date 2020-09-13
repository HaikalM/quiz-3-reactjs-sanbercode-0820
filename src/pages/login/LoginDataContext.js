import React, {useState, useEffect, createContext} from 'react'
export const LoginDataContext = createContext()

export const LoginDataProvider = (props) => {
	const [account, setAccount] = useState([
		{
			username: "haikal2",
			password: "1234"
		}, {
			username: "haikal1",
			password: "123"
		}
	])

	const [input, setInput] = useState({username: '', password: ''})
	const [loggedIn, setLoggedIn] = useState({status: false, username: ''})

	return(
		<LoginDataContext.Provider value={[account, setAccount, input, setInput, loggedIn, setLoggedIn]}>
			{props.children}
		</LoginDataContext.Provider>
	)
}


export default LoginDataProvider
