import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const root = () => {
  return (
    <div className="container mx-auto max-w-screen-lg">
      <Header />
      <Outlet />
    </div>
  );
};

export default root;
