import axios from 'axios';
import {useEffect} from 'react'
import NavBar from './Component/NavBar';
import Home from './Peages/Home';
import { Routes, Route } from "react-router-dom"
import Admin from "./Admin/Admin"


function App() {
  return(
    <>
    <Home/>
    <Routes>
    <Route path='/Admin' element={<Admin />} />
    </Routes>
    </>


  )
}

export default App;
