import './App.css';
import Create from './components/create/create'
import Dashboard from './components/dashboard/dashboard'
import Diolog from './components/diolog/diolog'
import Home from './components/home/home'
import Login from './components/login/login'
import Nav from './components/nav/nav'
import Read from './components/read/read'
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/Read' element={<Read/>}/>
    </Routes>
  );
}
export default App;
