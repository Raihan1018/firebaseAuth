import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../firebase/firebase.init";
import toast from "react-hot-toast";

const Logout = () => {
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logout successful ");
        // Sign-out successful.
        console.log("log out done");
      })
      .catch((error) => {
        toast.error("Logout fail");
        console.log(error.message);
      });
  };
  return (
    <div>
      <button
        onClick={handleLogout}
        className="btn bg-red-500 px-6 py-2 rounded text-white mt-10"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
