import axios from 'axios';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import './Cities.css'
import NavBar from '../NavBar/NavBar';
import User from '../User/User';
import Button from 'react-bootstrap/Button'
import { Link  } from "react-router-dom"
import { RiPinDistanceLine } from "react-icons/ri";
import { BsFillChatDotsFill } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import { GrTicket } from "react-icons/gr";









const Cities = () =>{

    const [city , setcity] = useState([])
    const [enableEdit, setEnabeEdit] = useState(false)
    const [idEdit, setIdEdit] = useState()
    const{cityp}=useParams()

    useEffect(() => {
   
        axios.get('http://localhost:5000/app/admin/city/'+cityp)
        .then ((res)=>{
            console.log(res.data)
            setcity(res.data)

        })
          }, [])

         // addCity

         const addCity= (e) =>{
            e.preventDefault()
            axios.post('http://localhost:5000/app/admin/CreateCity' , {
                data :{
                    name:e.target.form[0].value,
                    BigImage:e.target.form[1].value,
                    centerImage:e.target.form[2].value,
                    museumsImage:e.target.form[3].value,
                    trendImage:e.target.form[4].value

                }
            })
            .then((res)=>{
                console.log(res.data)
                setcity(res.data)
            })

         }

         //update
         function EditCity(_id) {
             
            setIdEdit(_id)
            setEnabeEdit(true)
         }
         function saveEdith(e){
         e.preventDefault()
            axios.put(`http://localhost:5000/app/admin/${idEdit}`,
                {
                    data:
                    {
                        name:e.target.form[0].value,
                        BigImage:e.target.form[1].value,
                        centerImage:e.target.form[2].value,
                        museumsImage:e.target.form[3].value,
                        trendImage:e.target.form[4].value
    
                    }
                })
                .then((res) => {
                    setcity(res.data);
                });
            setEnabeEdit(false)
        }

        //deleteCity

        const deleteCity = (e, _id) => {
            e.preventDefault()
            axios.delete(`http://localhost:5000/app/admin/deleteCity/${_id}`)
            .then((res) => {
                setcity(res.data);
    
            })
        }

        
         return(
             <>

<NavBar/>
<User/>
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
    <div>
        <h2> title</h2>
        <p>description</p>
        <Button variant="outline-info" ><Link to="/please">EXPLORE NEW</Link></Button>
    </div>
</div>
</div>
<div className="box">
        <div className="imgBox">
        <img src={city.museumsImage} height={500} width={400}></img>
        
</div>
 <div className="cont">
    <div>
        <h2> title</h2>
        <p>description</p>
        <Button variant="outline-info" ><Link to="/please">EXPLORE NEW</Link></Button>
    </div>
</div>
</div>
<div className="box">
        <div className="imgBox">
        <img src={city.trendImage} height={500} width={400}></img>
</div>
 <div className="cont">
    <div>
        <h2> title</h2>
        <p>description</p>
        <Button variant="outline-info" ><Link to="/please">EXPLORE NEW</Link></Button>
    </div>
</div>
</div>
</div> 
</div>


<div className='basics'>
<h1>basics</h1>   
<p>Plan your trip now for an experience full of vitality and beauty</p> 
</div>







<div className='row'>
    <div className='Card'>
    <h3>Mobility in saudi</h3>
        <h3>   <RiPinDistanceLine/>    </h3>
    <div className='conttener box1'>
    </div>
    </div>

    <div className='Card '>
    <h3>virtual assistant</h3>
    <h3>   <BsFillChatDotsFill/>    </h3>
  <div className='conttener box2'>
        
     
    </div>
    </div>

    <div className='Card'>
    <h3>   <TiTick/>    </h3>
    <h3> save traval</h3>
    <div className='conttener box3'>
    </div>
    </div>

    <div className='Card'>
    <h3>   <GrTicket/>    </h3>
    <h3> Consolidated Ticket</h3>
    <div className='conttener box4'> 
    </div>
    </div>
</div>
      


             </>
         )
}
export default Cities 
