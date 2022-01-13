import axios from "axios";
import React ,{ useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import Button from 'react-bootstrap/Button'
import NavBar from "../NavBar/NavBar";
import { Card , Form } from 'react-bootstrap';
import Upload from '../UplodeFile/Uplode'





const User = () => {

  const [Post, setPost] = useState([])
  const [title, settitle] = useState()
  const [message, setmessage] = useState()
  const [selectedFile, setselectedFile] = useState()
  const [date, setdate] = useState()

  const [loading , setLoading] =useState(true)


  let decodedData;
  const storedToken = localStorage.getItem("token");
  if (storedToken) {
    decodedData = jwt_decode(storedToken, { payload: true });
    let expirationDate = decodedData.exp;
    var current_time = Date.now() / 1000;
    if (expirationDate < current_time) {
      localStorage.removeItem("token");
    }
  }
  const [tokenId, setToken] = useState(decodedData.id);




  useEffect(() => {

    axios.get(`http://localhost:5000/app/user/getPost/${tokenId}`)
    .then((res)=>{
      console.log(res.data)
      setPost(res.data)
      setLoading(false)
    })
    
  }, [])


 const AddPost = (e) =>{
  e.preventDefault()
  axios.post(`http://localhost:5000/app/user/createPost/${tokenId}` ,{
    title :title ,
    message :message,
    selectedFile :selectedFile,
    date : date
  })
  .then((res)=>{
    setPost(res.data)
  })

 }

 const DeletePost =(e , _id) =>{
  e.preventDefault()
  axios.delete(`http://localhost:5000/app/user/deletePost/${tokenId}/${_id}`)
  .then((res)=>{
    setPost(res.date)
  })

 }





  
  // const [profail, setprofail] = useState();
  // const [clicked, setClicked] = useState(true);
  // const [email, setemail] = useState();
  // const [password, setpassword] = useState();

  

  // useEffect(() => {
  //   if (tokenId !== undefined) {
  //     axios.get(`http://localhost:5000/app/user/${tokenId}`).then((res) => {
  //         console.log(res.data)
  //       setprofail(res.data);
  //       setLoading(false)
  //     });
  //   }
  // }, []);

  // const showUpdateInput = () => {
  //   if (clicked) {
  //     setClicked(false);
  //   } else {
  //     setClicked(true);
  //   }
  // };

  // const UpdateProfail = (id) => {
  //     console.log(email,password)
  //   axios
  //     .put(`http://localhost:5000/app/user/${id}`, {
  //       email: email,
  //       password: password,

  //     })
  //     .then((res) => {
  //       setprofail(res.data);
        
  //     });
  // };

  if(loading){
      return(
              <p>loading..</p>
      )
      }

  return ( 
     
   
    

 <>
   <NavBar></NavBar>

   {Post.map((ele)=>{
     return(
       <div className="CardPosr">

  <img src={ele.selectedFile}></img>
    {ele.title}
    {ele.date}
     <Button onClick={(e)=> DeletePost(e,ele._id)}>Delete</Button>
  </div>


)
   })}  

          
          
          <div className='listofpost'>
                    
          <input onChange={(e) => settitle(e.target.value)} placeholder='Title'></input> {' '}
          <input onChange={(e)=> setmessage(e.target.value)} placeholder='Message'></input> {' '}
          {/* <input className='updateInput'> </input> {' '} */}
          <input onChange={(e)=> setdate(e.target.value)} placeholder='Date'></input> {' '}
          <Button onClick={(e)=> AddPost(e)}> Add memoris</Button>
          </div>
                    

  







  </>
  );
  
}


export default User;

