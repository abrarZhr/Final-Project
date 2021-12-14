import axios from 'axios';
import {useEffect} from 'react'
import NavBar from './Component/NavBar';
import Home from './Peages/Home';
import { Routes, Route } from "react-router-dom"
import Admin from "./Admin/Admin"


function App() {
  return(
    
    <>
   
    <Routes>
    {/* <Route path='/NavBar' element={<NavBar/>}/> */}
    <Route exact path='/' element={<Home />} />
    <Route path='/Admin/:cityp' element={<Admin />} />
    </Routes>
    </>


  )
}

export default App;
