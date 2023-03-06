import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
     
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link className="link-style" to="">
                Home
              </Link>
            </li>
            <li>
              <Link className="link-style" to="/Hospital/Donate">
                Donate
              </Link>
            </li>
            <li>
              <Link className="link-style" to="/Hospital/Receive" >
                Receive
              </Link>
            </li>
            <li>
              <Link className="link-style" to="/Hospital/Matching" >
                Matching
              </Link>
            </li>
            <li>
              <Link className="link-style" to="../../Login" >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default navbar;
