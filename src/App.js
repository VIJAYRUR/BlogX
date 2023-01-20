import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, Navigate, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import CreatePost from './pages/CreatePost';
import Login from './pages/Login';
import Navbar from './pages/Navbar';
import ViewPosts from './pages/ViewPost';
import {Profiler, useState} from 'react'
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import MyPosts from './pages/MyPosts';
import Register from './pages/Register';
import EditPost from './pages/EditPost';
import Profile from './pages/Profile'
import Report from './pages/Report';
function App() {
  const [isAuth,setIsAuth]=useState(localStorage.getItem("isAuth"));
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };
  
  return (
    <Router>
      <Navbar isAuth={isAuth} setIsAuth={setIsAuth}></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/createpost" element={<CreatePost isAuth={isAuth}/>}></Route>
        <Route path="/viewposts" element={<ViewPosts isAuth={isAuth}/>}></Route>
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />}></Route>
        <Route path="/myposts" element={<MyPosts isAuth={isAuth} />}></Route>
        <Route path="/register" element={<Register setIsAuth={setIsAuth}/>}></Route>
        <Route path="/editpost" element={<EditPost setIsAuth={setIsAuth} />}></Route>
        <Route path="/profile" element={<Profile setIsAuth={setIsAuth} />}></Route>
        <Route path="/report" element={<Report setIsAuth={setIsAuth} />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
