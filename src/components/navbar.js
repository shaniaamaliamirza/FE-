import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./navbar.js";
const Navbar = () => {
  useEffect(() => {
    function simulateMobileView() {
      if (window.innerWidth > 768) {
        document.body.classList.add("mobile-view");
      } else {
        document.body.classList.remove("mobile-view");
      }
    }

    window.addEventListener("resize", simulateMobileView);
    simulateMobileView();

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener("resize", simulateMobileView);
    };
  }, []);
  return (
    <div className="navbar bg-base-100">
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
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/About">ABOUT</Link>
            </li>
            <li>
              <Link to="/Menu">MENU</Link>
            </li>
            <li>
              <Link to="/Contact">CONTACT</Link>
            </li>
            <li>
              <Link to="/Cart">CART</Link>
            </li>
          </ul>
        </div>
        <img
          src="../logo/logo.jpg"
          alt="logo"
          style={{
            width: "100px",
            height: "90px",
          }}
        />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/About">ABOUT</Link>
          </li>
          <li>
            <Link to="/Menu">MENU</Link>
          </li>
          <li>
            <Link to="/Contact">CONTACT</Link>
          </li>
          <li>
            <Link to="/Cart">CART</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <a className="btn" style={{ marginRight: "10px" }}>
          <Link to="/login">MASUK</Link>
        </a>
        <a className="btn">
          <Link to="/register">DAFTAR</Link>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
