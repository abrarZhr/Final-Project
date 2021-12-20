import axios from 'axios';
import { useEffect, useState } from "react";
import ADDUsar from './AddUsar';
import jwt_decode from "jwt-decode";
import { Modal } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';


const User = () =>{

    let decodedData ;
    const storedToken = localStorage.getItem("token");
    if (storedToken){
        decodedData = jwt_decode(storedToken, { payload: true });
        let expirationDate = decodedData.exp;
        var current_time = Date.now() / 1000;
        if(expirationDate < current_time)
        {
            localStorage.removeItem("token");
        }
   }

    
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);


   const decode = (id) => {
    if (decodedData != undefined){
          if ( decodedData.UserType == "user"){
             return (
                <div>
                    {/* <button className='btn' onClick={(e) =>{deleteCountry(e,id)}}>Delete</button>
                    <button className='btn' onClick={(e) => {editCountry(id)}}>Edit</button> */}
<>
                              
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
        <ADDUsar/>

        </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            close Button
        </Button>
    </Modal.Header>
</Modal>  
          </>
                </div>
             )}
          }
        }
    
    const [Idimage , setIdImage] = useState()
    const [addImage , setImage] = useState()
    const [enableEdit, setEnabeEdit] = useState(false)

    // useEffect(() => {
    //     axios.get(`http://localhost:5000/app/user/image/${Idimage}`)
    //     .then ((res)=>{
    //         console.log(res.data)
    //         setcity(res.data)

    //     });
    //       }, [])

          //addimage

        //  const addImage= (e) =>{
              
        //     e.preventDefault()
        //     axios.post(`http://localhost:5000/app/user/CreatePic/${addImage}` , {
        //         data :{
        //             name:e.target.form[0].value,
        //             BigImage:e.target.form[1].value,
        //             centerImage:e.target.form[2].value,
        //             museumsImage:e.target.form[3].value,
        //             trendImage:e.target.form[4].value

        //         }
        //     })
        //     .then((res)=>{
        //         setcity(res.data)
        //     })

        //  }

        //    //deleteimage

        // const deleteimage  = (e, _id) => {
        //     e.preventDefault()
        //     axios.delete(`http://localhost:5000//app/admin/deleteCity/${_id}`)
        //     .then((res) => {
        //         setcity(res.data);
    
        //     })
        // }

        

        return(
<>

{decodedData?decode(decodedData.id):<></>}
</>         





        )



}
export default User