import React,{useEffect} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import Nav from '../nav/nav'
import './home.css'

const Home = () => {
  const navigate = useNavigate()
  useEffect(()=>{
    const token = localStorage.getItem('token');
    if(token){
      navigate('/dashboard')
    }
  })
  return (
    <div className='home'>
      <h1>Fiscal note</h1>
    <Link to='/login'><button>get started</button></Link>
    </div>
  )
}

export default Home