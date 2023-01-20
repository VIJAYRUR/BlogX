import React from 'react'
import { Link, NavLink } from "react-router-dom";
import {useNavigate} from 'react-router-dom'
import {signOut} from 'firebase/auth'
import {auth} from '../firebase-config'
import { FirebaseError } from 'firebase/app';
function Navbar({isAuth,setIsAuth}){
    let navigate=useNavigate();
  const signUserOut=()=>{
    signOut(auth).then(()=>{
      localStorage.clear();
      setIsAuth(false);
      auth.signOut();
      navigate("/")
    })
  }
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" >BlogX</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
      <li class="nav-item">
          <Link class="nav-link" to="/">Home</Link>
        </li>
        {!isAuth && <li class="nav-item ">
          <Link class="nav-link" to="/login">Login <span class="sr-only">(current)</span></Link>
        </li>}
        {!isAuth && <li class="nav-item ">
          <Link class="nav-link" to="/register">Register <span class="sr-only">(current)</span></Link>
        </li>}
        
       
        {isAuth &&<li class="nav-item">
          <Link class="nav-link" to="/createpost" >Add post</Link>
        </li> }
        {isAuth &&<li class="nav-item">
          <Link class="nav-link" to="/viewposts">View posts</Link>
        </li> }
        {isAuth &&<li class="nav-item">
          <Link class="nav-link" to="/myposts">My posts</Link>
        </li> }
        {isAuth &&<li class="nav-item">
          <Link class="nav-link" to="/report">Report</Link>
        </li> }
        
{/*       
        {isAuth && <li class="nav-item ">
          <Link class="nav-link" to="/"onClick={signUserOut}>Logout  </Link>
        </li>} */}
        
      </ul>
      {isAuth &&<div class="d-flex align-items-center">
      
          <Link class="nav-link" to="/"onClick={signUserOut} style={{color:"rgba(255,255,255,.5)"}}>Logout  </Link>
          
   

      
        <button type="button" class="btn btn-secondary me-3"data-toggle="tooltip" data-placement="bottom" title="Profile Page">
          <Link to='/profile'>
          <img src="https://www.freeiconspng.com/uploads/account-profile-user-icon--icon-search-engine-10.png" style={{height:"25px"}} class="rounded-circle" alt="..."/>
          </Link>
       
        </button>
       
      </div>
    }
      
   
    </div>
  </nav>
  );
}
export default Navbar;
