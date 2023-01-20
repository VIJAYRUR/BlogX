// import React, { useEffect, useState } from "react";
// import {
//   getDocs,
//   collection,
//   deleteDoc,
//   doc,
//   addDoc,
// } from "firebase/firestore";
// import { auth, db } from "../firebase-config";
// import { useNavigate } from "react-router-dom";
// import EditPost from "./EditPost";


// const MyPosts = ({ isAuth }) => {
//   const [postLists, setPostList] = useState([]);
//   const postsCollectionRef = collection(db, "posts");
//   const [editbox, seteditBox] = useState(false);
//   let navigate = useNavigate();
//   const getPosts = async () => {
//     try {
//       const data = await getDocs(postsCollectionRef);
//       setPostList(
//         data.docs.map((post) => ({
//           ...post.data(),
//           id: post.id,
//         }))
//       );
//     } catch (err) {
//       console.log(err);
//     }
//   };
  
   

//   const deletePost = async (id) => {
//     const postDoc = doc(db, "posts", id);
//     await deleteDoc(postDoc);
    
//   };

//   useEffect(() => {
//     getPosts();
//   }, []);

//   return (
//     <div className="homePage">
//       <h3>My-Posts</h3>
//       {postLists.map((post) => {
//         return (
//           <div>
//             {isAuth && post.author.id === auth.currentUser.uid && (
//               <div className="post">
//                 <div>
//                   <div className="postHeader">
//                     <div className="title">
//                       <h1> {post.title}</h1>
//                     </div>
//                   </div>
//                   <div className="postTextContainer"> {post.postText} </div>
//                   <br></br>
//                   <button
//                     onClick={() => {
//                       deletePost(post.id);
//                     }}
//                   >
//                     Delete Post
//                   </button>
//                   <br></br>
//                   <br></br>
//                   <div>
//                     <button onClick={()=>{seteditBox(true)}} >Edit Post</button>
//                     {editbox===true && <EditPost post={post} seteditBox={seteditBox}></EditPost>}
                    
                     
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default MyPosts;


import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc ,addDoc} from "firebase/firestore";
import { auth, db } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import EditPost from "./EditPost";

const MyPosts = ({ isAuth }) => {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");
  const [editbox, seteditBox] = useState(false);
  let navigate = useNavigate();
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
  };

  useEffect(() => {
    getPosts();
  }, []);

  const [title,setTitle]=useState("");
  const [text,setText]=useState("");
  
  const edit=async(post)=>{
   
    deletePost(post.id);
        await addDoc(postsCollectionRef,{
            title:title,
            postText:text,
            author: { name: auth.currentUser.displayName, id: auth.currentUser.uid }
        })
   
    document.location.reload();
  }
  return (
    <div className="homePage">
      <h3>My-Posts</h3>
      {postLists.map((post) => {
        return (
          <div>
            {isAuth && post.author.name === auth.currentUser.displayName && (
              <div className="post">
                <div>
                  <div className="postHeader">
                    <div className="title">
                      <h1> {post.title}</h1>
                    </div>
                  </div>
                  <div className="postTextContainer"> {post.postText} </div>
                  <br></br>
                  <button
                    onClick={() => {
                      deletePost(post.id);
                    }}
                  >
                    Delete Post
                  </button>
                  <br></br>
                  <br></br>
                  <div>
                    {/* <button onClick={()=>{edit(post)}} >Edit Post</button> */}
                    {/* {editbox===true && <EditPost post={post} seteditBox={seteditBox}></EditPost>} */}
                    <button
                      type="button"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      Launch demo modal
                    </button>

                    <div
                      class="modal fade"
                      id="exampleModal"
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">
                              {post.title}
                            </h5>
                            <button
                              type="button"
                              class="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body"><div class="form-group" >
    <label >Title</label>
    <input type="text" class="form-control"  placeholder="Enter Title"  onChange={(e)=>setTitle(e.target.value)} defaultValue={post.title}/>
  </div>
  <div class="form-group">
    <label>Post:</label>
    <textarea class="form-control"  rows="3" placeholder="Enter Content"   onChange={(e)=>setText(e.target.value)} defaultValue={post.postText}></textarea >
  </div>
  <button >Save Changes</button></div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default MyPosts;

