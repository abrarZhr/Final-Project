import axios from 'axios';
import {useEffect} from 'react'
import NavBar from './NavBar/NavBar';
import Home from './Peages/Home';
import { Routes, Route } from "react-router-dom"
import Admin from "./Admin/Admin"
import LogIn from "./LogIn/LogIn"
import Register from "./Register/Register"
import Cities from './Cities/Cities';


function App() {
  return(
    
    <>
   
    <Routes>
    {/* <Route path='/NavBar' element={<NavBar/>}/> */}
    <Route exact path='/' element={<Home />} />
    <Route path='/Cities/:cityp' element={<Cities />} />
    <Route path='/Register' element={<Register/>}/>
    <Route path='/Admin' element={<Admin/>}/>
    <Route path='/LogIn' element={<LogIn/>}/>
    </Routes>
    </>


  )
}

export default App;
