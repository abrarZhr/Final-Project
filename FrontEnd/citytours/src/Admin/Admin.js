import axios from 'axios';
import { useEffect, useState } from "react";



const City = () =>{

    const [city , setcity] = useState([])
    const [enableEdit, setEnabeEdit] = useState(false)
    const [idEdit, setIdEdit] = useState()
 
    useEffect(() => {
        axios.get('http://localhost:5000/app/admin/getCity')
        .then ((res)=>{
            console.log(res.data)
            setcity(res.data)

        });
          }, [])

         // addCity

         const addCity= (e) =>{
            e.preventDefault()
            axios.post('http://localhost:5000/app/admin/CreateCity' , {
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

         //update
         function EditCity(_id) {
             
            setIdEdit(_id)
            setEnabeEdit(true)
         }
         function saveEdith(e){
          e.preventDefault
            axios.put(`http://localhost:5000/app/admin/${idEdit}`,
                {
                    data:
                    {
                        name:e.target.form[0].value,
                        BigImage:e.target.form[1].value,
                        centerImage:e.target.form[2].value,
                        museumsImage:e.target.form[3].value,
                        trendImage:e.target.form[4].value
    
                    }
                })
                .then((res) => {
                    setcity(res.data);
                });
            setEnabeEdit(false)
        }

        //deleteCity

        const deleteCity = (e, _id) => {
            e.preventDefault()
            axios.delete(`http://localhost:5000//app/admin/deleteCity/${_id}`)
            .then((res) => {
                setcity(res.data);
    
            })
        }
         return(
             <div>


             
        

 

             </div>
         )














}
export default City 
