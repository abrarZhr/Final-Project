import axios from 'axios';
import { useEffect, useState } from "react";




const User = () =>{
    
    const [Idimage , setIdImage] = useState()
    const [addImage , setImage] = useState()

    useEffect(() => {
        axios.get(`http://localhost:5000/app/user/image/${Idimage}`)
        .then ((res)=>{
            console.log(res.data)
            setcity(res.data)

        });
          }, [])

          //addimage

          const addCity= (e) =>{
            e.preventDefault()
            axios.post(`http://localhost:5000/app/user/CreatePic/${addImage}` , {
                data :{
                    name:e.target.form[0].value,
                    BigImage:e.target.form[1].value,
                    centerImage:e.target.form[2].value,
                    museumsImage:e.target.form[3].value,
                    trendImage:e.target.form[4].value

                }
            })
            .then((res)=>{
                setcity(res.data)
            })

         }

           //deleteimage

        const deleteimage = (e, _id) => {
            e.preventDefault()
            axios.delete(`http://localhost:5000//app/admin/deleteCity/${_id}`)
            .then((res) => {
                setcity(res.data);
    
            })
        }



}
export default User