import React, { useState, useEffect } from "react";
import {
  getDocs,
  collection,
  deleteDoc,
  doc,
  addDoc,
} from "firebase/firestore";
import { auth, db } from "../firebase-config";

import { useNavigate } from "react-router-dom";
import EditPost from "./EditPost";

const MyPosts = ({ isAuth }) => {
  const [edit, setEdit] = useState(false);
  const [postLists, setPostList] = useState([]);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  let navigate = useNavigate();
  const postsCollectionRef = collection(db, "posts");

  const getPosts = async () => {
    try {
      const data = await getDocs(postsCollectionRef);
      setPostList(
        data.docs.map((post) => ({
          ...post.data(),
          id: post.id,
        }))
      );
    } catch (err) {
      console.log(err);
    }
  };
  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
    setEdit(false)
    window.location.reload();
  };
 
  const change2 = async (post) => {
    console.log(text.length)
    ;
    await deletePost(post.id);
    if ((title.length == 0)&&(text.length == 0)) {
      await addDoc(postsCollectionRef, {
        title: post.title,
        postText: post.postText,
        author: {
          name: auth.currentUser.displayName,
          id: auth.currentUser.uid,
        },
      });
    } 
    else if ((title.length == 0)&&(text.length != 0)) {
      await addDoc(postsCollectionRef, {
        title: post.title,
        postText: text,
        author: {
          name: auth.currentUser.displayName,
          id: auth.currentUser.uid,
        },
      });
    } else if ((title.length != 0)&&(text.length == 0)) {
      await addDoc(postsCollectionRef, {
        title: title,
        postText: post.postText,
        author: {
          name: auth.currentUser.displayName,
          id: auth.currentUser.uid,
        },
      });
    } else {
      await addDoc(postsCollectionRef, {
        title: title,
        postText: text,
        author: {
          name: auth.currentUser.displayName,
          id: auth.currentUser.uid,
        },
      });
    }
   
  };
  useEffect(() => {
    getPosts();
    setEdit(false);
  }, []);

  return (
    <div className="homePage">
      <h3>My-Posts</h3>
      <br></br>
      {edit === false && (
        <button onClick={() => setEdit(true)} style={{display:"flex",justifyContent:"flex-end",alignItems:"flex-end"}}class="btn btn-outline-secondary" >Enable Edit Options</button>
      )}
      {edit === true && (
        <button onClick={() => setEdit(false)} class="btn btn-secondary">Disable Edit Options</button>
      )}
      {postLists.map((post) => {
        return (
          <div>
            {isAuth &&  (post.author.id === auth.currentUser.uid ) && (
              <div>
              {edit === false && (
                  <div className="post">
                  <div>
                    <div className="postHeader">
                      <div className="title">
                        <h1> {post.title}</h1>
                      </div>
                    </div>
                    <div className="postTextContainer"> {post.postText} </div>
                  </div>
                </div>
                )}
                {edit === true && (
                  // <div className="homePage">
                  
                    <div className="post">
                      <div class="form-group">
                        <label>Title</label>
                        
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Enter Title"
                          defaultValue={post.title}
                          onChange={(e) => setTitle(e.target.value)}
                          
                        />
                      </div>
                      <div class="form-group">
                        <label>Post:</label>
                        <textarea
                          class="form-control"
                          rows="3"
                          placeholder="Enter Content"
                          defaultValue={post.postText}
                          onChange={(e) => setText(e.target.value)}
                        ></textarea>
                      </div>
                      <button onClick={() => deletePost(post.id)} class="btn btn-secondary btn-sm">
                        Delete Post
                      </button>
                      
                      <button onClick={() => change2(post)} class="btn btn-secondary btn-sm" style={{marginLeft:"10px"}}>
                        Save Changes
                      </button>
                    </div>
                  // </div>
                )}
                </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default MyPosts;
