import axios from "axios";
import React ,{ useEffect, useState } from "react";
import "./UserStyle.js";
import jwt_decode from "jwt-decode";
import Button from 'react-bootstrap/Button'
import NavBar from "../NavBar/NavBar";
import Posts from '../User/Posts/Posts'
import Form from '../User/Form/Form'

// import UseStyles from './UserStyle'

// import { useDispatch} from 'react-redux';
// import {getPost} from '../actions/Posts';



import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';


const User = () => {
  //  const dispatch = useDispatch();
  // const Classes = UseStyles();

  // useEffect(() => {
  //  dispatch(getPost({}));
    
  // }, [])


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
  {/* <NavBar></NavBar>
  <Container maxWidth="lg">
      <AppBar className={Classes.appBar} position="static" color="inherit">
        <Typography className={Classes.heading} variant="h2" align="center">Memories</Typography>
        </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts  />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form   />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
       */}







  </>
  );
  
}


export default User;

