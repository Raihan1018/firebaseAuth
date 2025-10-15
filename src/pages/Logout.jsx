import React from "react";

const Logout = () => {
  const handleLogout = () => {
    console.log("logout ");
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
