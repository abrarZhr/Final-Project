import axios from 'axios';
import { useEffect, useState } from "react";
import ADDUsar from './AddUsar';




const User = () =>{
    
    const [Idimage , setIdImage] = useState()
    const [addImage , setImage] = useState()
    const [enableEdit, setEnabeEdit] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:5000/app/user/image/${Idimage}`)
        .then ((res)=>{
            console.log(res.data)
            setcity(res.data)

        });
          }, [])

          //addimage

        //   const addImage= (e) =>{
              
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
        )



}
export default User