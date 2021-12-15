// import {Modal} from '@restart/ui/esm/Modal';
import axios from 'axios';
import { Modal } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import '../Admin/Admin.css'
import NavBar from '../NavBar/NavBar';
import AddCity from '../Admin/AddCity';





const Admin = () =>{

    const [city , setcity] = useState([])
    const [enableEdit, setEnabeEdit] = useState(false)
    const [idEdit, setIdEdit] = useState()
    const{cityp}=useParams()
 
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
   
        axios.get('http://localhost:5000/app/admin/city/'+cityp)
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
             <>

<NavBar/>

<div id="carouselExampleSlidesOnly" 
className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">

      <img src={city.BigImage} className="d-block w-100"/>
      <div className="text">
      <h5>{city.name}</h5>
        </div>
    </div>
  </div>

</div>


<div className="Card">
        <div className="ImageHome">
        <img src={city.centerImage} height={500} width={400}></img>
        <img src={city.museumsImage} height={500} width={400}></img>
        <img src={city.trendImage} height={500} width={400}></img>
</div>
</div> 

<div className="table-title">
    <div className="row">
        <div className="col-sm-6">
        </div>
        <div className="col-sm-6">
            <Button onClick={handleShow} className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i><span>add new city</span></Button>
        </div>
    </div>
</div>
<Modal show={show} onHide={handleClose}>
    <Modal.Header>
    <Modal.Title>
    Add New City
    </Modal.Title>

        <Modal.Body>
        <AddCity/>

        </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            close Button
        </Button>
    </Modal.Header>
</Modal>     
       
{/*----------------------------------------------- */}

             </>
         )
}
export default Admin 
