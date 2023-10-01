import React from "react";
import { Outlet, Link } from "react-router-dom";
import src from "../img/logo.png";
export default function Navbar() {
  const handleClick = () => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="flex w-full h-[75px] flex-row justify-between items-center gradient1 sticky top-0 z-20">
        <div className="flex w-[30%] justify-center items-center">
          <img src={src} className="w-[115px]  h-[48px]" alt="Logo"></img>
        </div>
        <ul className="flex  flex-row justify-between w-[50%] font-Akaya text-white text-[26px] mr-10">
          <li>
            <Link to="/" onClick={handleClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={handleClick}>
              About
            </Link>
          </li>
          <li>
            <Link to="/">Resume</Link>
          </li>
          <li>
            <Link to="/project" onClick={handleClick}>
              Project
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={handleClick}>
              Contact us
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}
