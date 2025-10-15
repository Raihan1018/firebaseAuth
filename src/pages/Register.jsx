import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase.init";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // handle register form
  const handleRegister = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        toast.success("Register successful");
        navigate("/login");
        console.log(result.user);
      })
      .catch((error) => {
        toast.error("Register fail");
        console.log(error);
      })
      .finally();
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <title>Register</title>
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center mb-4">Register Now</h1>
          <form onSubmit={handleRegister}>
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
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                className="input input-bordered w-full"
                placeholder="Enter your password"
              />

              {/* <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                className="input input-bordered w-full"
                placeholder="Confirm password"
              /> */}

              <div className="flex justify-between items-center text-sm mt-2">
                <Link to="#" className="link link-hover">
                  Forgot password?
                </Link>
                <Link to="/login" className="link link-hover">
                  Login instead
                </Link>
              </div>

              <button className="btn btn-neutral w-full mt-4">Register</button>
            </fieldset>
          </form>
          <div>
            <Link className="btn btn-primary w-full" to={"/"}>
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
