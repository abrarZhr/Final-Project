import axios from 'axios';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import './Cities.css'
import NavBar from '../NavBar/NavBar';
import Image from '../Cities/imagefetch'
import User from '../User/User';
import Button from 'react-bootstrap/Button'
import { Link  } from "react-router-dom"
import { RiPinDistanceLine } from "react-icons/ri";
import { BsFillChatDotsFill } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import { FaTicketAlt } from "react-icons/fa";
import { Footer } from '../Footer/Footer';
import Aos from "aos"
import "aos/dist/aos.css"

const Cities = () =>{

    const [city , setcity] = useState([])
    const{cityp}=useParams()

    useEffect (()=>{
        Aos.init({duration :1000 ,
            
        });
    },[]);

    useEffect(() => {
   
        axios.get('http://localhost:5000/app/admin/city/'+cityp)
        .then ((res)=>{
            console.log(res.data)
            setcity(res.data)

        })
          }, [])

         return(
             <>

<NavBar/>


<div id="carouselExampleSlidesOnly" 
className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">

      <img src={city.BigImage} className="d-block w-100"/>
   
      <div className="textCity">
      <h1>{city.name}</h1>
     
        </div>
    </div>
  </div>
</div>

<div className="section">
<div className="main-heading">
<h1>explore</h1>
<p>Our kingdom is a country of adventurers, historians, scientists, artists, food lovers and yoga lovers. Whatever your inclinations, we promise you will find a soul touching soul in our kingdom.</p>
</div>
</div>


<div className="body">
<div className="container">
        <div className="box">
        <div className="imgBox">
        <img src={city.centerImage} height={500} width={400}></img>
</div>
 <div className="cont">
    <div className>
        <h2> City Center</h2>
        <p>The symbol of civilization and originality</p>
        {<Button variant="outline-info"  ><Link style={{textDecoration: "none"}} to={`/Places/${cityp}/center`}>EXPLORE NEW</Link></Button>}
    </div>
</div>
</div>
<div className="box">
        <div className="imgBox">
        <img src={city.museumsImage} height={500} width={400}></img>
        
</div>
 <div className="cont">
    <div>
        <h2>Museums</h2>
        <p>Wander through history</p>
        <Button variant="outline-info" ><Link style={{textDecoration: "none"}} to={`/Places/${cityp}/museum`}>EXPLORE NEW</Link></Button>
    </div>
</div>
</div>
<div className="box">
        <div className="imgBox">
        <img src={city.trendImage} height={500} width={400}></img>
</div>
 <div className="cont">
    <div>
        <h2>Markts</h2>
        <p>Live at your own pace</p>
        <Button variant="outline-info"  ><Link style={{textDecoration: "none"}} to={`/Places/${cityp}/marketing`}>EXPLORE NEW</Link></Button>
    </div>
</div>
</div>
</div> 
</div>


<div className='section'>
<div className="main-heading">
<h1>basics</h1>   
<p>Plan your trip now for an experience full of vitality and beauty</p> 
</div>
</div>

<div className='row'>

    <div className='Card'>
    <a href="https://www.w3schools.com/jsref/jsref_link.asp">
    <h3>Mobility in saudi</h3>
        <h3>   <RiPinDistanceLine/>    </h3>
    <div className='conttener '>
    </div>
    </a>
    </div>

    <div className='Card '>
    <h3>virtual assistant</h3>
    <h3>   <BsFillChatDotsFill/>    </h3>
  <div className='conttener '>
    
    </div>
    </div>

    <div className='Card'>
    <h3>More infromation</h3>
    <h3>   <TiTick/>    </h3>
    <div className='conttener'>
    </div>
    </div>

    <div className='Card' >
    <a href="https://riyadhtickets.herokuapp.com">
    <h3> Create your own itinerary</h3>

    <h3> <FaTicketAlt/> </h3>
    <div className='conttener'> 
    </div>
    </a>
    </div>

</div>

<Image/>

<Footer></Footer>
             </>
         )
}
export default Cities 
