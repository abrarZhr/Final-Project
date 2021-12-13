import { React, useState,useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../Component/NavBar";
import '../Peages/Home.css'
import { useNavigate } from "react-router";
import axios from 'axios';



const Home = () =>{

        const [selectCity , setselectCity] =useState()
        const [City , setCity] =useState([])
        const [loading , setLoading] =useState(true)
        
        const navigate=useNavigate()
        useEffect(() => {
   
                axios.get('http://localhost:5000/app/admin/getCity')
                .then ((res)=>{
                    console.log(res.data)
                    setCity(res.data)
                    setLoading(false)
                })
                  }, [])

        function selectCityfun(city){
                console.log(city+"cityy")
                setselectCity(city)
                navigate('/Admin/'+city)

        }

        if(loading){
                return(
                        <p>loading..</p>
                )
        }

return(

        // {e=>setselectCity(e.target.value)} value={City} 
    
        <div className="content">
{/* 
        <NavBar></NavBar> */}
        

        <select onChange={(e)=>{selectCityfun(e.target.value)}} class="form-select" aria-label="Default select example">
   
  {City.map (city=>{
          return(
        <>
        <option value={city._id}>hello</option> 
        <option value={city._id}>{city.name}</option> 
        </>
          )
  })}
</select>



                
        </div>
    
)
}

export default Home