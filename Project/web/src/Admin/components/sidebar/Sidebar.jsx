import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/Admin" style={{ textDecoration: "none" }}>
          <span className="logo">OrgoD</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/Admin" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/Admin/Users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/Admin/Hospital" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Hospitals</span>
            </li>
          </Link>
{/* 
          <Link to="/Admin" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>District</span>
            </li>
          </Link>
          <Link to="/Admin" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Place</span>
            </li>
          </Link>
          <Link to="/Admin" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Blood</span>
            </li>
          </Link>
          <Link to="/Admin" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Type</span>
            </li>
          </Link>

          <Link to="/Admin" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Organ</span>
            </li>
          </Link>
           */}
          <Link to="../../Login" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Logout</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
