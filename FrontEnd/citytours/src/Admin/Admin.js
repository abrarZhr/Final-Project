import axios from 'axios';
import { useEffect, useState } from "react";
import '../Admin/Admin.css'



const Admin = () =>{

    const [city , setcity] = useState([])
    const [enableEdit, setEnabeEdit] = useState(false)
    const [idEdit, setIdEdit] = useState()
 
    useEffect(() => {
   
        axios.get('http://localhost:5000/app/admin/getCity')
        .then ((res)=>{
            console.log(res.data)
            setcity(res.data)

        })
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
                console.log(res.data)
                setcity(res.data)
            })

         }

        //  //update
        //  function EditCity(_id) {
             
        //     setIdEdit(_id)
        //     setEnabeEdit(true)
        //  }
        //  function saveEdith(e){
        //   e.preventDefault
        //     axios.put(`http://localhost:5000/app/admin/${idEdit}`,
        //         {
        //             data:
        //             {
        //                 name:e.target.form[0].value,
        //                 BigImage:e.target.form[1].value,
        //                 centerImage:e.target.form[2].value,
        //                 museumsImage:e.target.form[3].value,
        //                 trendImage:e.target.form[4].value
    
        //             }
        //         })
        //         .then((res) => {
        //             setcity(res.data);
        //         });
        //     setEnabeEdit(false)
        // }

        // //deleteCity

        const deleteCity = (e, _id) => {
            e.preventDefault()
            axios.delete(`http://localhost:5000//app/admin/deleteCity/${_id}`)
            .then((res) => {
                setcity(res.data);
    
            })
        }

        
         return(
             <div>


{city.map((ele)=>(
<div id="carouselExampleSlidesOnly" 
className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">

      <img src={ele.BigImage} className="d-block w-100" alt="..."/>
      <div className="text">
      <h5>Riyadh</h5>
        </div>
    </div>
  </div>

</div>
))
}

<div className="Card">
    {city.map((ele)=>(
        <div className="ImageHome">
        <img src={ele.centerImage} height={500} width={500}></img>
        <img src={ele.museumsImage} height={500} width={500}></img>
        <img src={ele.trendImage} height={500} width={500}></img>
</div>
    ))}
</div>








             
       
{/*----------------------------------------------- */}

             </div>
         )














}
export default Admin 
