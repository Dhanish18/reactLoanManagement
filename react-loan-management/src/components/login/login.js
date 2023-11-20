import React from 'react'
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import './login.css'

const Login = () => {
  const navigate = useNavigate()

  useEffect(()=>{
    const token = localStorage.getItem('token');
    if(token){
      navigate('/dashboard')
    }
  })

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState('')
 
 const handleEmailChange = (e) => {
   setEmail(e.target.value)
 }
 const handlePasswordChange = (e) => {
    setPassword(e.target.value)
 }
 const handleLogin = () => {
      if(!email&&!password){
        setError('please provide both email and password')
      }
      else if(!email){
        setError('please provide email')
      }
      else if(!password){
        setError('please provide password')
      }
      else if(email==='dhanish@gmail.com' && password==='dhanish18'){
        setError('')
        localStorage.setItem('token',email)
        navigate('/dashboard')
      }else{
        setError('user invalid')
      }
 }

  return (
    <div className='login'>
    <h1>
      login
    </h1>
    <input type='text' value={email} placeholder='email' onChange={handleEmailChange} />
    <input type='password' value={password} placeholder='password' onChange={handlePasswordChange} />
    <p>{error}</p>
    <button onClick={handleLogin}>login</button>
     </div>
  )
}

export default Login