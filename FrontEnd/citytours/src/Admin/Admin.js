import axios from 'axios';
import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Modal , Form  , FloatingLabel} from 'react-bootstrap';
import NavBar from '../NavBar/NavBar';
import User from '../User/User';
import Button from 'react-bootstrap/Button'
import { Link  } from "react-router-dom"
import { useForm } from "react-hook-form";


const Admin = () =>{

    const [city , setcity] = useState([])
    const [enableEdit, setEnabeEdit] = useState(false)
    const [idEdit, setIdEdit] = useState()
    const{cityp}=useParams()

    const [nameCity , setCityName] = useState()
    const [bigimag , setbig] = useState()
    const [center , setcenter] = useState()
    const [museums , setmuseums] = useState()
    const [trend , setTrend]= useState()

    const [modalShow, setModalShow] = React.useState(false);

    

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
            console.log(nameCity)
            console.log(bigimag)
            console.log(center)
            console.log(museums)
            console.log(trend)
            axios.post('http://localhost:5000/app/admin/CreateCity' , {
                data :{
                    name:nameCity,
                    BigImage:bigimag,
                    centerImage:center,
                    museumsImage:museums,
                    trendImage:trend

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


        //add pleace 
        const addPleace= (e ,id) =>{
            e.preventDefault()
            axios.post(`http://localhost:5000/app/admin/CreatePleace/${id}` , {
                data :{
                    type:e.target.form[0].value,
                    image:e.target.form[1].value,
                    centerImage:e.target.form[2].value,
                    description:e.target.form[3].value,
                    location:e.target.form[4].value

                }
            })
            .then((res)=>{
                console.log(res.data)
                setcity(res.data)
            })

         }

  
          
    
                return (
                  <>
                   <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

                    <Modal
        show={modalShow}

      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >

    
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          add new City
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

      <>
  <FloatingLabel
    controlId="floatingInput"
    label="name"
    className="mb-3"
  >
    <Form.Control type="text" onChange={(e)=>setCityName(e.target.value)} placeholder="jeddah" />
  </FloatingLabel>

  <FloatingLabel controlId="floatingimage" label="bigImage">

    <Form.Control type="text" onChange={(e)=>setbig(e.target.value)} placeholder="image" />
  </FloatingLabel>

  <FloatingLabel controlId="floatingimage" label="image">
  <Form.Control type="text" onChange={(e)=>setcenter(e.target.value)} placeholder="center" />

  </FloatingLabel>

  <FloatingLabel controlId="floatingimage" label="image">
  <Form.Control type="text" onChange={(e)=>setmuseums(e.target.value)} placeholder="museum" />

  </FloatingLabel>
  <FloatingLabel controlId="floatingimage" label="image">
  <Form.Control type="text" onChange={(e)=>setTrend(e.target.value)} placeholder="image" />

  </FloatingLabel>
</>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={(e)=>addCity (e)}>add</Button>
        <Button onClick={()=> setModalShow(false)}>Close</Button>
      </Modal.Footer>
    </Modal>
                  </>
                );
                }
            
 
            
        
              
export default Admin 