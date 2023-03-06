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
              <Link className="link-style" to="/User">
                Home
              </Link>
            </li>
            <li>
              <Link className="link-style" to="/User/Donate/">
                Donate
              </Link>
            </li>
            <li>
              <Link className="link-style" to="/User/Request/">
                Request
              </Link>
            </li>
            <li>
              <Link className="link-style" to="/User/Matching/">
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
