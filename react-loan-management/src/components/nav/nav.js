import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
import './nav.css'

const Nav = () => {
  const navigate = useNavigate();
  const handleLogout=()=>{
      localStorage.removeItem('token');
      navigate('/');
    }
  return (
    
    <nav className='nav'>
    <Link to='/dashboard' style={{textDecoration:'none',marginBlock:'3vh',color:'white'}}>dashboard</Link>
    <Link to='/create' style={{textDecoration:'none',marginBlock:'3vh',color:'white'}}>create</Link>
    <Link to='/read' style={{textDecoration:'none',marginBlock:'3vh',color:'white'}}>read</Link>
    <button onClick={handleLogout}>logout</button>
    </nav>
  )
}

export default Nav