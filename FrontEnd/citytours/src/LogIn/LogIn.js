import Button from 'react-bootstrap/Button'
import React from 'react'
import { Link } from 'react-router-dom'
import '../Register/Register.css'
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const LogIn = () =>{

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const navigate = useNavigate();

    const login = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/login', {
            email: Email,
            password: Password
        })
            .then((res) => {
                if (res.data) {
                    console.log(res.data)
                    const token = res.data;
                    localStorage.setItem("token", token);
                    navigate("/");
                }
            })

        }

    return(
        <div className="Container">
        <div className="Wrapper">
        <h1>CREATE AN ACCOUNT</h1>

        <div className="Form">
        <input placeholder="Email"></input>
        <input placeholder="Password"></input>

        
        <div className="bu">
        <Button variant="outline-info"  onClick = {(e)=>{login(e)}}>Log In</Button>{' '}
        </div>

        {/* <div className="val">
            <Link>DO NOT YOU REGISTER THE PASSWORD?</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
        </div>
         */}


        </div>
        </div>
        </div>
    
    )

}
export default LogIn