import axios from 'axios';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import '../Admin/Admin.css'
import NavBar from '../NavBar/NavBar';
import User from '../User/User';



const Admin = () =>{

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


<div className="Card">
        <div className="ImageHome">
     <button> <img src={city.centerImage} height={500} width={400}></img></button>  
        <img src={city.museumsImage} height={500} width={400}></img>
        <img src={city.trendImage} height={500} width={400}></img>
</div>
</div> 
   
       
{/*----------------------------------------------- */}



             </>
         )
}
export default Admin 
