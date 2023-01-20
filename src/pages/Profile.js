import React,{ useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {createUserWithEmailAndPassword} from 'firebase/auth'
const Profile = ({setIsAuth}) => {
   
   
  
    return <div class="container py-5 h-200">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card shadow-2-strong" style={{borderRadius: "1rem;"}}>
          <div class="card-body p-5 text-center">
            <h3 >Your Info</h3>
            <div class="card-body">
            <div class="text-center">
  <img src="https://www.freeiconspng.com/uploads/account-profile-user-icon--icon-search-engine-10.png" style={{height:"125px"}} class="rounded-circle" alt="..."/>
</div>
  <br></br>

  {auth.currentUser.displayName!=null &&  <h5 class="card-title">{auth.currentUser.displayName}</h5>}
  <br></br>
  {auth.currentUser.displayName==null &&  <h5 class="card-title">{auth.currentUser.email.split('@')[0]}</h5>}
    <h6 class="card-subtitle mb-2 text-muted">Email : { <i class="card-title">{auth.currentUser.email}</i>} </h6>
    <br></br>
    <h6 class="card-subtitle mb-1 text-muted">User Id: { <i class="card-title">{auth.currentUser.uid.substring(0,5)+auth.currentUser.uid.substring(auth.currentUser.uid.length-5)}</i>} </h6>
    <br></br>
   <h6 class="card-subtitle mb-1 text-muted">Your Posts: <Link to="/myposts">My Posts</Link></h6>
  
  </div>
           

            

          
          
          
          </div>
        </div>
      </div>
    </div>
  </div>
    // </div>;
}



export default Profile;