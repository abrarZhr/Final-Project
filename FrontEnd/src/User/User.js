import axios from "axios";
import React ,{ useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import Button from 'react-bootstrap/Button'
import NavBar from "../NavBar/NavBar";





const User = () => {
 



  // const [loading , setLoading] =useState(true)
  // const [profail, setprofail] = useState();
  // const [clicked, setClicked] = useState(true);
  // const [email, setemail] = useState();
  // const [password, setpassword] = useState();

  // let decodedData;
  // const storedToken = localStorage.getItem("token");
  // if (storedToken) {
  //   decodedData = jwt_decode(storedToken, { payload: true });
  //   let expirationDate = decodedData.exp;
  //   var current_time = Date.now() / 1000;
  //   if (expirationDate < current_time) {
  //     localStorage.removeItem("token");
  //   }
  // }
  // const [tokenId, setToken] = useState(decodedData.id);

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

  // if(loading){
  //     return(
  //             <p>loading..</p>
  //     )
  //     }

  return ( 
     
   
    

 <>
   <NavBar></NavBar>
 
       







  </>
  );
  
}


export default User;

