import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { getAuth } from "firebase/auth";

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase.init";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setError("");
        toast.success("Login successful");
        navigate("/");
        console.log(userCredential.user);
      })
      .catch((error) => {
        toast.error("Login fail!");
        setError("Invalid email or password");
        console.log(error.message);
      })
      .finally();
  };

  // google login
  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("login google", user);
        navigate("/");
      })
      .catch((error) => console.log(error.message))
      .finally(() => {});
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <title>Login</title>
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center mb-4">Login</h1>
          {error && <p className="text-red-500 text-center italic">{error}</p>}
          <form onSubmit={handleLogin}>
            <fieldset className="fieldset space-y-3">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered w-full"
                placeholder="Enter your email"
              />

              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered w-full"
                placeholder="Enter your password"
              />

              <div className="flex justify-between items-center text-sm mt-2">
                <Link to="#" className="link link-hover">
                  Forgot password?
                </Link>
                <Link to="/register" className="link link-hover">
                  Create account
                </Link>
              </div>

              <button className="btn btn-neutral w-full mt-4">Login</button>
              {/* Google */}
              <button
                onClick={handleGoogleLogin}
                className="btn bg-white text-black border-[#e5e5e5]"
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
            </fieldset>
          </form>
        </div>
        <Link className="btn btn-primary w-full" to={"/"}>
          Home
        </Link>
      </div>
    </div>
  );
};

export default Login;
