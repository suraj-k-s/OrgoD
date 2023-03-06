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
              <Link className="link-style" to="HospitalRegistration">
                Hospital
              </Link>
            </li>
            <li>
              <Link className="link-style" to="UserRegistration" >
                User
              </Link>
            </li>
            <li>
              <Link className="link-style" to="Login" >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default navbar;
