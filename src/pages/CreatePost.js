import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import { useNavigate } from "react-router-dom";
function CreatePost({ isAuth }) {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [url, setUrl] = useState("");
  const postsCollectionRef = collection(db, "posts");

  let navigate = useNavigate();
  const createPost = async () => {
    var temp = "";
    temp = auth.currentUser.displayName;
    if (auth.currentUser.displayName == null) {
      temp = auth.currentUser.email.split("@")[0];
    }
    await addDoc(postsCollectionRef, {
      title,
      postText,
      url,
      author: { name: temp, id: auth.currentUser.uid },
    });
    window.alert("post created");
    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="homePage">
      <div className="post">
        <div class="form-group">
          <label>Title</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Title"
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div class="form-group">
          <label>Post:</label>
          <textarea
            class="form-control"
            rows="3"
            placeholder="Enter Content"
            onChange={(event) => setPostText(event.target.value)}
          ></textarea>
        </div>
        <div class="form-group">
          <label>Image url:</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter NA if no image is required to be shown"
            onChange={(event) => setUrl(event.target.value)}
          />
        </div>
        <button onClick={createPost} class="btn btn-secondary btn-lg btn-block">
          {" "}
          Submit Post
        </button>
      </div>
    </div>
  );
}
export default CreatePost;
