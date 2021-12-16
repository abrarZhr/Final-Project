import Button from 'react-bootstrap/Button'
import React from 'react'
 import '../Register/Register.css'
import Form  from 'react-bootstrap/Form';
import Row  from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import jwt from "jwt-decode";


const Register = () => {
  
    const getLocalStorage = localStorage.getItem("token")
    const [Email, setEmail] = useState()
    const [Password, setPassword] = useState()
    const navigate=useNavigate();

      const register= (e) => {
          console.log("ooooo")
          e.preventDefault()
          axios
          .post('http://localhost:5000/singup',{
              email:Email,
              password:Password
      })
          .then((res) => {
              console.log(res)
                   if (res.data.errors) {
            }
            if (res.data) {
              console.log(res.data)
              const token = res.data.token;
              console.log(token)
              const authorSign = jwt(token); // decode your token here
             
             localStorage.setItem("token", token);
             navigate("/LogIn");

            }

            }
            )
           
         }

    return (
        <div className="Container">
        <div className="Wrapper">
        <h1>CREATE AN ACCOUNT</h1>

        <div className="Form">
        <input onChange={(e)=> {setEmail(e.target.value)}} placeholder="Email"></input>
        <input onChange={(e)=> {setPassword(e.target.value)}} placeholder="Password"></input>
        
    <fieldset>

    <Form.Group as={Row} className="mb-3">
      <Form.Label as="legend" column sm={2}>
        
      </Form.Label>
      <Col sm={1}>
        <Form.Check
          type="radio"
          label="USER"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="ADMIN"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        </Col>
        </Form.Group>

        
    </fieldset>

    <div className="bu">
    
        <Button variant="outline-info" onClick = {(e)=>{register(e)}}>CREATE</Button>{' '}
        
        <Button variant="outline-info" Link to="./LogIn" >Log in</Button>{' '}
        </div>
        
        </div>
        </div>
        </div>
    
    )
}
      
export default Register
