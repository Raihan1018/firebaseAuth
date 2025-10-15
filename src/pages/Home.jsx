import React from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import AuthState from "../components/AuthState";
const Home = () => {
  return (
    <div>
      <title>Home</title>
      <div className="flex mt-5 space-x-5">
        <Link className="btn btn-primary" to={"/register"}>
          Register
        </Link>
        <Link className="btn btn-primary" to={"/login"}>
          Login
        </Link>
      </div>
      <Logout />
      <AuthState/>
    </div>
  );
};

export default Home;
