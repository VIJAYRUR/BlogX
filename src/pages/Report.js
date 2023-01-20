import React, { useState,useEffect } from 'react'
import {addDoc, collection} from 'firebase/firestore'
import {auth, db} from '../firebase-config'
import {useNavigate} from 'react-router-dom'

function Report({isAuth}){
    const [pid,setPid]=useState("");
  const [pmessage,setPmessage]=useState("");
  const postsCollectionRef=collection(db,"messages")
  const [unknown,setUnkown]=useState(false);
  
  let navigate=useNavigate();
  const createMessage = async () => {
    var temp=""
   
    await addDoc(postsCollectionRef, {
      pid,
      pmessage,
      user:auth.currentUser.email,
    });
    window.alert("Message sent")
    navigate("/");
  };
  const createMessage2 = async () => {
    var temp="anonymous"
    await addDoc(postsCollectionRef, {
      pid,
      pmessage,
      user:temp,
    });
    window.alert("Message sent as Unknown")
    navigate("/");
  };

  
    return (
    <div className='homePage'>
    <div className='post'>
        <h4 style={{textAlign:"center"}}>Report/Feedback</h4>
    <div class="form-group">
    <label >Post Id </label>
    <input type="text" class="form-control"  placeholder="Enter NA if only feedback to be given"  onChange={(event)=>setPid(event.target.value)}/>
  </div>
  <div class="form-group">
    <label>Message:</label>
    <textarea class="form-control"  rows="3" placeholder="Enter report message/feedback"  onChange={(event)=>setPmessage(event.target.value)} ></textarea >
  <i>**further communication will be done through mail</i>
  </div>
 
  <button  class="btn btn-secondary btn-lg btn-block" onClick={createMessage}> Submit Message</button>
  <button  class="btn btn-secondary btn-lg btn-block" onClick={createMessage2}> Submit Message as Anonymous</button>
 
 
    </div>
   

  </div>
    )
}
export default Report;