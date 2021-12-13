import { React, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../Component/NavBar";
import '../Peages/Home.css'
import { useNavigate } from "react-router";




const Home = () =>{

        const [selectCity , setselectCity] =useState()
        const [City , setCity] =useState([ "select city","Riyadh" , "Jeddah" , "Dammam" , "almadinah" ])
        const navigate=useNavigate()

return(

        // {e=>setselectCity(e.target.value)} value={City} 
    
        <div className="content">
{/* 
        <NavBar></NavBar> */}
        

        <select onChange= {navigate(`/Admin/`)}
        class="form-select" aria-label="Default select example">
   
  {City.map (city=>{
          return(
        <option value={city}>{city}</option> 
          )
  })}
</select>


                
        </div>
    
)
}

export default Home