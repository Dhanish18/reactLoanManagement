import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import Nav from '../nav/nav';
import './dashboard.css'

const Dashboard = () => {
   const navigate = useNavigate()

  useEffect(()=>{
    const token = localStorage.getItem('token');
    if(!token){
      navigate('/');
    }
  });

  const handleLogout=()=>{
    localStorage.removeItem('token');
    navigate('/');
  } 
  return (
    <div className='dashboard'> 
    <Nav />
    <div className='dashboardContainer'>
    <h1>
      dashboard
    </h1>
    <button onClick={handleLogout}>
      logout
    </button>
       </div>
    </div>
  )
}

export default Dashboard