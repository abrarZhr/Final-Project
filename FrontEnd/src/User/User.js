import axios from "axios";
import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import Button from "react-bootstrap/Button";
import NavBar from "../NavBar/NavBar";
import "./User.css";
import Upload from "../UplodeFile/Uplode";
import { RiDeleteBin5Fill } from "react-icons/ri";

const User = () => {
  const [Post, setPost] = useState([]);
  const [title, settitle] = useState();
  const [message, setmessage] = useState();
  const [selectedFile, setselectedFile] = useState();
  const [date, setdate] = useState();

  const [loading, setLoading] = useState(true);

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
    axios
      .get(`http://localhost:5000/app/user/getPost/${tokenId}`)
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
        setLoading(false);
      });
  }, []);

  const AddPost = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/app/user/createPost/${tokenId}`, {
        title: title,
        message: message,
        selectedFile: selectedFile,
        date: date,
      })
      .then((res) => {
        console.log(res.date);
        setPost(res.data.PostMessage);
      });
  };

  const DeletePost = (e, _id) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:5000/app/user/deletePost/${tokenId}/${_id}`)
      .then((res) => {
        console.log(res.data);
        setPost(res.data.PostMessage);
      });
  };

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

  if (loading) {
    return <p>loading..</p>;
  }

  return (
    <>
      <NavBar></NavBar>

      <div className="TitleHeder">
        <div className="conn">
          <h2 className="special-heading"> Memoris</h2>
          <p>The Kingdom of Saudi Arabia contains ma ished</p>
        </div>
      </div>
      <div className="bodyPost">

      <div className="allCards">
          {Post.map((ele) => {
            return (
              <>
                <div className="CardPosr">
                  <div className="card-image">
                    <img src={ele.selectedFile}
                    style={{ height: "100px", width: "100px" }}>
                    </img>
                  </div>
                  <div className="card-text">{ele.title} </div>
                  <div className="card-message">{ele.message}</div>
                  <div className="card-date">{ele.createdAt.split('T')[0]}</div>
                  <Button onClick={(e) => DeletePost(e, ele._id)}>
                    <RiDeleteBin5Fill />
                  </Button>
                </div>
              </>
            );
          })}
        </div>

      <div className="post">
          <div className="listofpost">
            <input
              onChange={(e) => settitle(e.target.value)}
              placeholder="Title"
            ></input>{" "}
            <input
              onChange={(e) => setmessage(e.target.value)}
              placeholder="Message"
            ></input>{" "}
            <input
              onChange={(e) => setdate(e.target.value)}
              placeholder="Date"
            ></input>{" "}
            <Upload setimge={setselectedFile} /> <br></br>
            <Button onClick={(e) => AddPost(e)}> Add memoris</Button>
          </div>
        </div>
        
        

   
      </div>
    </>
  );
};

export default User;
