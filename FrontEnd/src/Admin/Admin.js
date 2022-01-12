import axios from 'axios';
import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Modal, Form, FloatingLabel } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar';
import Button from 'react-bootstrap/Button'

import jwt_decode from "jwt-decode";
import CustomizedDialogs from './dialog'
import './Admin.css'


const Admin = () => {


  let decodedData;
  const storedToken = localStorage.getItem("token");
  if (storedToken) {
    decodedData = jwt_decode(storedToken, { payload: true });
    let expirationDate = decodedData.exp;
    var current_time = Date.now() / 1000;
    if (expirationDate < current_time) {
      localStorage.removeItem("token");
    }
  }


  const decode = (id) => {
    if (decodedData != undefined) {
      if (decodedData.UserType == "admin") {
        return (
          <div>

            <NavBar></NavBar>
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
                    <Form.Control type="text" onChange={(e) => setCityName(e.target.value)} placeholder="jeddah" />
                  </FloatingLabel>

                  <FloatingLabel
                    controlId="floatingimage"
                    label="bigImage"
                    className="mb-3"
                  >
                    <Form.Control type="text" onChange={(e) => setbig(e.target.value)} placeholder="image" />
                  </FloatingLabel>

                  <FloatingLabel
                    controlId="floatingimage"
                    label="image"
                    className="mb-3"
                  >
                    <Form.Control type="text" onChange={(e) => setcenter(e.target.value)} placeholder="center" />
                  </FloatingLabel>

                  <FloatingLabel
                    controlId="floatingimage"
                    label="image"
                    className="mb-3">
                    <Form.Control type="text" onChange={(e) => setmuseums(e.target.value)} placeholder="museum" />
                  </FloatingLabel>

                  <FloatingLabel
                    controlId="floatingimage"
                    label="image"
                    className="mb-3">
                    <Form.Control type="text" onChange={(e) => setTrend(e.target.value)} placeholder="image" />
                  </FloatingLabel>
                </>

              </Modal.Body>
              <Modal.Footer>
                <Button onClick={(e) => addCity(e)}>add</Button>
                <Button onClick={() => setModalShow(false)}>Close</Button>


              </Modal.Footer>
            </Modal>


          </div>

        )
      }
    }
  }
  const [city, setcity] = useState([])
  const [enableEdit, setEnabeEdit] = useState(false)
  const [idEdit, setIdEdit] = useState()
  const { cityp } = useParams()

  const [nameCity, setCityName] = useState()
  const [bigimag, setbig] = useState()
  const [center, setcenter] = useState()
  const [museums, setmuseums] = useState()
  const [trend, setTrend] = useState()
  const [EditId, setEditId] = useState()
  const [EditOrNot, setEditOrNot] = useState(false)

  const [modalShow, setModalShow] = React.useState(false);



  useEffect(() => {

    axios.get('http://localhost:5000/app/admin/getCity/')
      .then((res) => {
        console.log(res.data)
        setcity(res.data)

      })
  }, [])

  // addCity

  const addCity = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/app/admin/CreateCity', {
      data: {
        name: nameCity,
        BigImage: bigimag,
        centerImage: center,
        museumsImage: museums,
        trendImage: trend

      }
    })
      .then((res) => {
        console.log(res.data)
        setcity(res.data)
      })

  }

  //update
  function update(Id) {
    
    axios.put(`http://localhost:5000/app/admin/city/${Id}`,
      {

        name: nameCity,
        BigImage: bigimag,
        centerImage: center,
        museumsImage: museums,
        trendImage: trend


      })
      .then((res) => {
        console.log("object")
        console.log(res.data)
        setcity(res.data);
        setEditOrNot(false)

      });
  }

  function changeUpdate(city) {
    setEditId(city._id)
    setCityName(city.name)
    setEditOrNot(true)
  }

  //deleteCity

  const deleteCity = (e, _id) => {
    e.preventDefault()
    axios.delete(`http://localhost:5000/app/admin/deleteCity/${_id}`)
      .then((res) => {
        console.log(res.data)
        setcity(res.data);

      })
  }




  const [lgShow, setLgShow] = useState(false)





  return (
    <>

      {decodedData ? decode(decodedData.id) : <></>}

      <div className='test' >
        {city.map((ele) => {
          return ( 

            
            <>
            <div className='imagg'>

            <h1>{ele.name}</h1>
            <img src={ele.BigImage} height={300} width={300}></img>
            <img src={ele.trendImage}  height={300} width={300} ></img>
            <img src={ele.museumsImage}  height={300} width={300}></img>
            <img src={ele.centerImage} height={300} width={300}></img>

</div>

<div className='editDeleteButt'>

<div>

<Button onClick={(e)=> deleteCity(e,ele._id)}> delete</Button> 
</div>


          <CustomizedDialogs>
          
<div className='listOfInputs'>
          
<input className='updateInput' onChange={(e) => setCityName(e.target.value)} placeholder='City Name'></input> {' '}
<input className='updateInput' onChange={(e)=> setbig(e.target.value)} placeholder='heder image'></input> {' '}
<input className='updateInput' onChange={(e)=> setcenter(e.target.value)} placeholder='Center Image'></input> {' '}
<input className='updateInput' onChange={(e)=> setmuseums(e.target.value)} placeholder='Museums Image'></input> {' '}
<input className='updateInput' onChange={(e)=> setTrend(e.target.value)} placeholder='Trend Image'></input> {' '} <br></br>
</div>
<Button onClick={() =>  update(ele._id) } >Save Changes</Button>
            
     
          </CustomizedDialogs>
</div>
          </>)
        })}
      </div>






    </>
  )
}





export default Admin 