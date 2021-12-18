import { React, useState,useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import './Home.css'
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
<div className="home">
        <div className="content">
      
        <div className="img"> 
        <div className="form">
        <div className="container">
        <span class="text1"> Welcome to </span>
        <span class="text2">City</span>
      
        </div>
        <select onChange={(e)=>{selectCityfun(e.target.value)}} class="form-select" aria-label="Default select example">

                <option >city</option>  
  {City.map (city=>{
          return(
        <>
       
        <option value={city._id}>{city.name}</option>  
        </>
          )
  })}


  
</select>  
</div>
<div className='parent'> 
<div className="card card1">
                <h5>Riyadh</h5>
                <p></p>
        </div>
        <div className="card card2">
                <h5>Jeddah</h5>
                <p></p>
        </div>
        <div className="card card3">
                <h5>Makkah</h5>
                <p></p>
        </div>
        <div className="card card4">
                <h5>Dammam</h5>
                <p></p>
        </div>
   
  </div>

</div>

</div> 



















        </div>

        

          
    
)
}

export default Home