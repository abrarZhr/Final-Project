import Button from 'react-bootstrap/Button'
import axios from "axios";
import React , {useState} from "react";
import {Image} from 'cloudinary-react'

function Uplode ({setimge}) {

    const [imageSelected, setimageSelected] = useState("")

    const uploadImage =() =>{
        const formDate = new FormData()
        formDate.append("file" , imageSelected)
        formDate.append("upload_preset" , "cityTours")

        axios.post("https://api.cloudinary.com/v1_1/city-tourse/image/upload" , formDate )
        .then((res)=>{
            console.log(res)
            setimge(res.data.secure_url)
        })
    };



 
    return (
        <div className='Uploade'>
            <input  type="file"  onChange={(e)=>{setimageSelected(e.target.files[0])}}></input>

            <Button onClick={uploadImage}>Upload Image</Button>
            {/* <Image cloudName="city-tourse" publicId="" /> */}
        </div>
    )
}

export default Uplode