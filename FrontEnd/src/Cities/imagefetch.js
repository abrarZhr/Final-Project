import axios from 'axios';
import { useEffect, useState } from "react";
import './image.css'



  //pixabay API
const Image = () =>{
const [loading , setLoading] =useState(true)
const [image , setImage]=useState()

useEffect (()=>{
    axios.get("https://pixabay.com/api/?key=25039841-763f375d646736d4b42b4f614&q=saudi arabia&image_type=all")
    .then ((res)=>{
        console.log(res.data.hits)
        setImage(res.data.hits)
        setLoading(false)

    })
} ,[])



if(loading){
    return(
            <p>loading..</p>
    )
}


return (

    <>
    
 <div className="main-heading">
<h1></h1>
<p>.</p>
</div>

<div className='imges'>

{image.map((ele)=>{
    return(
        <div className='fetchimage'>
             <img src={ele.largeImageURL} width={200} height={200}/> 
             
        </div>

      
    )
    
})} 
</div>


</>
)
}

export default Image
