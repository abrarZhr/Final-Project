import axios from "axios"
import React , { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import { useParams } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import Button from 'react-bootstrap/Button'
import { Modal , Form  , FloatingLabel} from 'react-bootstrap';
import './Places.css'
import Aos from "aos"
import "aos/dist/aos.css"

const Places = ()=>{

    useEffect (()=>{
        Aos.init({duration :1500 ,
            offset:400
        });
    },[]);

     //save & update
     const [please , setPlease ]=useState([])
     const [type, settype] = useState()
     const [imge, setimge] = useState()
     const [descriptionte, setdes] = useState()
     const [location, setlocation] = useState()
     const{cityId,category}=useParams()
     
   
    
    let decodedData ;
    const storedToken = localStorage.getItem("token");
    if (storedToken){
        decodedData = jwt_decode(storedToken, { payload: true });
        let expirationDate = decodedData.exp;
        var current_time = Date.now() / 1000;
        if(expirationDate < current_time)
        {
            localStorage.removeItem("token");
        }
   }

   const [modalShow, setModalShow] = React.useState(false);
 
 const decode = (id) => {
    if (decodedData != undefined){
          if ( decodedData.UserType == "admin"){
             return (
               
                <div className="MODEL">

              
              <Button variant="primary" onClick={() => setModalShow(true)}>
  Add New City
 </Button>
               <Modal
   show={modalShow}

 size="lg"
 aria-labelledby="contained-modal-title-vcenter"
 centered
>


 <Modal.Header>
   <Modal.Title id="contained-modal-title-vcenter">
     add new Places
   </Modal.Title>
 </Modal.Header>
 <Modal.Body>

 <>

<FloatingLabel
controlId="floatingInput"
label="Image"
className="mb-3"
>
<Form.Control  type="text" onChange={(e)=>setimge(e.target.value)} placeholder="image of place" />
</FloatingLabel>

<FloatingLabel 
controlId="floatingInput"
label="descrption"
className="mb-3"
>
<Form.Control type="text" onChange={(e)=>setdes(e.target.value)} placeholder="descrption" />
</FloatingLabel>

<FloatingLabel 
controlId="floatingInput"
label="Location"
className="mb-3"
>
<Form.Control  type="text" onChange={(e)=>setlocation(e.target.value)} placeholder="location" />
</FloatingLabel>

</>

 </Modal.Body>
 <Modal.Footer>
   <Button onClick={(e)=>addPlease (e)}>add</Button>
   <Button onClick={()=> setModalShow(false)}>Close</Button>
   
 
 </Modal.Footer>
</Modal>


</div>
                

             )}}}

   

//connect
    useEffect(() => {
        axios.get(`http://localhost:5000/app/admin/getPlease/${cityId}/${category}`)
        .then ((res)=>{
            console.log(res.data)
            setPlease(res.data)
        })
        
    }, [])

      //add pleace 
       
         
      const addPlease =(e) =>{
        e.preventDefault()
        axios.post(`http://localhost:5000/app/admin/CreatePleace/${cityId}` ,{
  
            data:{
                type:category,
                image:imge,
                description:descriptionte,
                location:location,
            }
  
        })
        .then((res)=>{
            console.log(res)
            setPlease(res.data.places.filter((e)=>{
                return e.type==category
              }))
        })
    }
  



    return(

        <>
 <NavBar></NavBar>

 <div className="heder">
     <img src="https://images.pexels.com/photos/4694813/pexels-photo-4694813.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" height={1000}></img>
 </div>

 <div data-aos="fade-in">
 <div className="TitleHeder">
 <div className="conn">
 
     <h2 className="special-heading">Saudi Arabia </h2>
     <p>The Kingdom of Saudi Arabia contains many tourist places that tourists from around the world look for, which makes it always distinguished</p>
 </div>
 </div>

 </div>
{decodedData?decode(decodedData.id):<></>}

<div className="please">
            {please.map((ele)=>{
                return(
                    <div className="bodyPlaces">

                    <section class="sec-01">
                        <div className="container1">
                        
                            <div className="cotent1">
                            <div data-aos="fade-in">
                                <div className="Image">
                                    <img src={ele.image}/>
                                </div>
                                </div>
                                <div data-aos="fade-left">
                                <div className="text-box">
                                    <p>{ele.description}</p>
                                <iframe src={ele.location}
                                frameborder="0"
                                tabindex="-1"
                                 width="100%" 
                                 height="192px"
                                 allowfullscreen=""
                                   loading="lazy"
                                   >
                                   </iframe>

                                 
                                 










                                    </div>
                                </div>
                            </div>  
                        </div>
                    </section>
                    
            
              
                </div>
                )

            })}

            
        </div>

        </>

        

    )
    
}

export default Places