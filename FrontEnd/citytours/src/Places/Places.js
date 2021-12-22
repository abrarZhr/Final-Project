import axios from "axios"
import React , { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import { useParams } from 'react-router-dom';



const Places = ()=>{

    //save & update
    const [please , setPlease ]=useState([])
    const [type, settype] = useState()
    const [imge, setimge] = useState()
    const [descriptionte, setdes] = useState()
    const [location, setlocation] = useState()
    const{cityId,category}=useParams()

//connect
    useEffect(() => {
        axios.get(`http://localhost:5000/app/admin/getPlease/${cityId}/${category}`)
        .then ((res)=>{
            console.log(res.data)
            setPlease(res.data)
        })
        
    }, [])


    const addPlease =(e) =>{
        e.preventDefault()
        axios.post(`http://localhost:5000/app/admin/CreatePleace/${cityId}` ,{

            data:{
                type:category,
                image:imge,
                description:descriptionte,
                location:location,
            }

        })
        .then((res)=>{
            console.log(res)
            setPlease(res.data.places.filter((e)=>{
                return e.type==category
              }))
        })
    }

    return(

        <>
        <NavBar></NavBar>
        <h3>Add places</h3>
        <div className="please">
            {please.map((ele)=>{
                return(
                    <div>
            
                <img src={ele.image}/>
                {ele.description}
                {ele.location}
                </div>
                )

            })}
        </div>

        <form className="from" onSubmit={addPlease}>
        <input type="text" onChange={(e)=>setimge(e.target.value)} placeholder="image of place"></input><br></br>
        <input type="text" onChange={(e)=>setdes(e.target.value)} placeholder="descrption"></input><br></br>
        <input type="text" onChange={(e)=>setlocation(e.target.value)} placeholder="location"></input><br></br>
        <button type="submit">Add</button> 
        </form>
 
        </>

    )



}

export default Places