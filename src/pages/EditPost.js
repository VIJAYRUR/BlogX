import React,{useState} from 'react';
import {addDoc,setDoc,doc ,collection, getDocs, query, where, deleteDoc} from 'firebase/firestore'
import {auth, db} from '../firebase-config'
const deletePost = async (id) => {

    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };


const EditPost = ({post}) => {
    const [title,setTitle]=useState();
    const [text,setText]=useState();
    const postsCollectionRef=collection(db,"posts")
    const change=async()=>{
        
        deletePost(post.id);
            await addDoc(postsCollectionRef,{
                title:title,
                postText:text,
                author: { name: auth.currentUser.displayName, id: auth.currentUser.uid }
            })
       
        document.location.reload();
      }
    return <div className='homePage' >
        <div className='post'>
    <div class="form-group" >
    <label >Title</label>
    <input type="text" class="form-control"  placeholder="Enter Title"  onChange={(e)=>setTitle(e.target.value)} defaultValue={post.title}/>
  </div>
  <div class="form-group">
    <label>Post:</label>
    <textarea class="form-control"  rows="3" placeholder="Enter Content"   onChange={(e)=>setText(e.target.value)} ></textarea >
  </div>
  <button onClick={change}>Save Changes</button>
 
    </div>
    </div>;
}

export default EditPost;