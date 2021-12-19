import React from "react";
import './NavBar.css'
import '../Cities/Cities'
import '../LogIn/LogIn'
import '../LogOut/LogOut'
import '../Register/Register'
import { Link , useNavigate } from "react-router-dom"


const NavBar = () =>{

  const navigate = useNavigate();
  const getLocalStorage = localStorage.getItem("token")
  const logout=(e)=>{
      e.preventDefault()
      localStorage.removeItem('token')
      navigate('/')
  }
    return(
<container>
    <div className="rapper">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
    {!getLocalStorage ?(
        <>
        <li class="nav-item active">
        <a class="nav-link" ><Link to='/Register'> Register </Link><span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" ><Link to='/login'> login</Link> </a>
        <a class="nav-link" ><Link to='/Admin'> Admin</Link> </a>
      </li>
</>
        ) : null}
     
      {getLocalStorage ?(
        <li class="nav-item">
        <a class="nav-link" ><Link to='/LogOut'> <button onClick={(e)=>logout(e)}> logout</button></Link> </a>
      </li> 
        ) : null}
      
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
    
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>


    </div>
</container>





    )

}

export default NavBar;