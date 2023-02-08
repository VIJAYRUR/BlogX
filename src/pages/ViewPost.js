import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";

function ViewPost({ isAuth }) {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  const getPosts = async () => {
    try {
      const data = await getDocs(postsCollectionRef);
      console.log(data);
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
    getPosts();
  };

  useEffect(() => {
    console.log("Effect called");
    getPosts();
  }, []);

  return (
    <div className="homePage">
      <i>**Latest articles are shown first</i>
      {postLists.map((post) => {
        return (
          <div className="post">
            <div className="postHeader">
              <div className="title" style={{ textAlign: "center" }}>
                <h2> {post.title}</h2>
              </div>
            </div>
            <br></br>
            {post.url != null &&
              post.url != "na" &&
              post.url != "" &&
              post.url != "NA" && (
                <img
                  src={post.url}
                  style={{ height: "300px", width: "500px" }}
                  class="rounded mx-auto d-block"
                  alt="..."
                ></img>
              )}
            {/* <img
              src={post.url}
              style={{ height: "300px", width: "500px" }}
              class="rounded mx-auto d-block"
              alt="..."
            ></img> */}
            <br></br>
            <div className="postTextContainer" style={{ fontSize: "20px" }}>
              {" "}
              {post.postText}{" "}
            </div>
            <br></br>

            {isAuth &&
              post.author.id !== auth.currentUser.uid &&
              post.author.name != null && (
                <span>
                  <h6>Written by: </h6>
                  <i>{post.author.name}</i>
                </span>
              )}

            <br></br>
            {isAuth && post.author.id === auth.currentUser.uid && (
              <div>
                <i>Written By You</i>
                {/* <button 
                    onClick={() => {
                      deletePost(post.id);
                    }}
                  >Delete Post
                    
                  </button> */}
              </div>
            )}
            <span>
              <p>
                Post ID:{" "}
                <i style={{ color: "#007bff" }}>
                  {post.id.substring(0, 4) +
                    post.id.substring(post.id.length - 4)}
                </i>
              </p>
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default ViewPost;
