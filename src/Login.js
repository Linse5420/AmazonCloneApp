import React, { useState } from 'react';
import './Login.css';
import {useHistory} from 'react-router-dom';


const Login = () => {
const [email,setEmail]=useState('');
const [password, setPassword]=useState('');
    
    const login = event=>
    {
        event.preventDefault();//to stop the refresh
    }
    const register = event=>
    {
        event.preventDefault();
    }
  return (

    <div className="login">
    <a href="/">
    <img
    className='login_image'
    src="https://governmentjobswork.com/wp-content/uploads/2020/10/Amazon-Jobs.png"
    alt=""/>
    </a>
  
    <div className='login_container'>
    <h1> Sign In</h1>
    <form>
    <h5> E-mail</h5><input value={email} onChange={event=>setEmail(event.target.value)} type="email"/>
    <h5> Password</h5><input value={password} onChange={event=>setPassword(event.target.value)} type="password"/><br/>
    <button onClick={login} type="submit" className="signin">Sign In</button>
    <p> This is an amazon clone and all copyrights goes with amazon.<br/>
     I only did this to test my skills as a developer, and to showcase my skills to my future employers</p>
   <button onClick={register}   className='fakeAccound'> Create your Fake amazon accound</button> 
    </form>
    </div>
    
    </div>
  )
}

export default Login