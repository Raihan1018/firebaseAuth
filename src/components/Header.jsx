import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const links = (
    <>
      <li className="text-[20px] font-semibold">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-300 underline decoration-yellow-300 underline-offset-4"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="text-[20px] font-semibold">
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-300 underline decoration-yellow-300 underline-offset-4 "
              : ""
          }
        >
          Login
        </NavLink>
      </li>
      <li className="text-[20px] font-semibold">
        <NavLink
          to="/register"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-300 underline decoration-yellow-300 underline-offset-4"
              : ""
          }
        >
          Register
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar sticky top-0 left-0 right-0 z-50 shadow-md mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link className="btn btn-ghost  ">
          <span className="text-3xl font-bold text-[16px]">FireBase</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end space-x-5"></div>
    </div>
  );
};

export default Header;
