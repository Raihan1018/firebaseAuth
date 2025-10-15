import { signInWithEmailAndPassword } from "firebase/auth";
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
