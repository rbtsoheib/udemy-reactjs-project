import React from "react";
import { Link } from "react-router-dom";
import "./Counter.css";

function Header() {
  return (
    <>
      <div className="main-header">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/About">
            <li>About</li>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default Header;
