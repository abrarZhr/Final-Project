import Button from 'react-bootstrap/Button'
import React from 'react'
import { Link } from 'react-router-dom'
import '../Register/Register.css'
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import jwt from "jwt-decode";



const LogIn = () =>{

    

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate();

    const login = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/login', {
            email: email,
            password: password
        })
            .then((res) => {
                if (res.data) {
                    console.log(res.data)
                    const token = res.data.user;
                    console.log(token)
                    const user = jwt(token); 
                    console.log(user)
                    localStorage.setItem("token", token); 
                    navigate(-1)
                }
            })

        }

    return(
        <div className="Container">
        <div className="Wrapper">
        <h1>SIGN IN</h1>

        <div className="Form">
        <input onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email"></input>
        <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password"></input>

        
        <div className="bu">
        <Button variant="outline-info"  onClick = {(e)=>{login(e)}}>Log In</Button>{' '}
        </div>

        <div className="val">
            <h5>Not a member yet? <Link to="/Register"> Sign Up here </Link> </h5>
        </div>
        


        </div>
        </div>
        </div>
    
    )

}
export default LogIn