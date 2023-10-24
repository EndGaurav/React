import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext';

const Login = () => {
    const [username, setUsername] = useState("");
    const [passoword, setPassoword] = useState("");
    const {setUser} = useContext(UserContext);

    const loginHandle = (e) => {
        e.preventDefault();
        setUser({username, passoword})
    }
  return (
    <div>
        <h2>Login Dash</h2>
        <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder='Password' value={passoword} onChange={(e) => setPassoword(e.target.value)}/>
        <button onClick={loginHandle}>Login</button>
    </div>
  )
}

export default Login