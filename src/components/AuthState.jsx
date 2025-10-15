import { onAuthStateChanged } from "firebase/auth";
import React, { use, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase.init";

const AuthState = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // const uid = currentUser.uid;
        // console.log(uid);
        console.log(currentUser.email);
        setUser(currentUser);
      } else {
        console.log("user not found");
      }
    });
    return () => unsubscribe();
  }, [auth]);

  return (
    <div>
      {user ? (
        <p>Welcome: {user?.email || "No email"}</p>
      ) : (
        <p>
          Please Login{" "}
          <Link className="text-blue-500 underline" to={"/login"}>
            Here
          </Link>
        </p>
      )}
    </div>
  );
};

export default AuthState;
