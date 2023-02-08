import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { auth, provider } from "../firebase-config";
import { getAuth, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
function Login({ setIsAuth }) {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();
  const signin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
        alert("login success");
        navigate("/");
      })
      .catch((error) => {
        alert("login failed, check credentials");
      });
  };
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };
  return (
    <div>
      <div class="container-fluid h-custom">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              class="img-fluid"
              alt="Sample image"
            />
          </div>
          <div
            class="col-md-8 col-lg-6 col-xl-4 offset-xl-1"
            style={{ paddingTop: "20px" }}
          >
            <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
              {/* <div> */}
              <button
                class="btn btn-info btn-lg btn-block"
                onClick={signInWithGoogle}
              >
                Sign In with Google
              </button>
              {/* </div> */}
            </div>
            <form>
              <div class="divider d-flex align-items-center my-2">
                <p
                  class="text-center fw-bold mx-3 mb-0"
                  style={{ paddingLeft: "209px" }}
                >
                  Or
                </p>
              </div>
              <label class="form-label" for="form3Example3">
                Email address
              </label>
              <div class="form-outline mb-4">
                <input
                  type="email"
                  id="form3Example3"
                  class="form-control form-control-lg"
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter a valid email address"
                />
              </div>
              <label class="form-label" for="form3Example4">
                Password
              </label>
              <div class="form-outline mb-3">
                <input
                  type="password"
                  id="form3Example4"
                  class="form-control form-control-lg"
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Enter password"
                />
              </div>

              <div class="text-center text-lg-start mt-4 pt-2">
                <button
                  type="button"
                  class="btn btn-secondary btn-lg btn-block"
                  onClick={signin}
                >
                  Login
                </button>
                <p class="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?{" "}
                  <NavLink to="/register" className="signup-image-link">
                    Register
                  </NavLink>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
