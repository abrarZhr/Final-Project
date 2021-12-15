import Button from 'react-bootstrap/Button'
import React from 'react'
 import '../Register/Register.css'
import Form  from 'react-bootstrap/Form';
import Row  from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import { useState , useNavigate } from 'react';
import axios from 'axios';


const Register = () => {

    const [Email, setEmail] = useState()
    const [Password, setPassword] = useState()
    const navigate=useNavigate();

      const register= (e) => {
          e.preventDefault()
          axios
          .post('http://localhost:5000/singup',{
              email:Email,
              password:Password
      })
          .then((res) => {
              console.log(res)
              navigate("/LogIn");

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
        </div>
        
        </div>
        </div>
        </div>
    
    )
}
      
export default Register
