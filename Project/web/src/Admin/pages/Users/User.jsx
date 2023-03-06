import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./User.scss";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React, { Component } from 'react'

export default class User extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            rows:[],
        }
    }
    componentDidMount() {
        axios
          .get(
            "http://localhost/Orgod/Project/api/Guest/User.php"
          )
          .then((response) => response.data)
          .then((data) => {
            this.setState({ rows: data });
          });
      }
  render() {
    return (
        <div className="User">
        <Sidebar />
        <div className="UserContainer">
          <Navbar />
          <div className="listContainer">
            <div className="listTitle">Latest</div>
            <TableContainer component={Paper} className="table">
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className="tableCell">ID</TableCell>
                    <TableCell className="tableCell">Photo</TableCell>
                    <TableCell className="tableCell">Name</TableCell>
                    <TableCell className="tableCell">Contact</TableCell>
                    <TableCell className="tableCell">Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.rows.map((row) => (
                    <TableRow key={row.User_id}>
                      <TableCell className="tableCell">{row.user_id}</TableCell>
                      <TableCell className="tableCell">
                        <div className="cellWrapper">
                          <img src={"http://localhost/OrgoD/Project/api/Assets/UserPhoto/"+row.user_photo} alt="" className="image" />
                          {row.product}
                        </div>
                      </TableCell>
                      <TableCell className="tableCell">{row.user_name}</TableCell>
                      <TableCell className="tableCell">{row.user_contact}</TableCell>
                      <TableCell className="tableCell">
                        <span className={`status v${row.user_vstatus}`}></span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
  
          </div>
        </div>
      </div>
    )
  }
}
