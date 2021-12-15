import Button from '@restart/ui/esm/Button'
import React from 'react'
import '../Register/Register.css'

function Register() {
    return (
        <div className="Container">
        <div className="Wrapper">
        <h1>CREATE AN ACCOUNT</h1>

        <div className="Form">
        <input placeholder="Email"></input>
        <input placeholder="Password"></input>
        <div className="bu">
        <Button>CREATE</Button>
        </div>
        
        </div>
        </div>
        </div>
    
    )
}

export default Register
