import Button from '@restart/ui/esm/Button'
import React from 'react'
import { Link } from 'react-router-dom'
import '../Register/Register.css'



const LogIn = () =>{

    return(
        <div className="Container">
        <div className="Wrapper">
        <h1>CREATE AN ACCOUNT</h1>

        <div className="Form">
        <input placeholder="Email"></input>
        <input placeholder="Password"></input>
        <div className="bu">
        <Button>SIGN in</Button>
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