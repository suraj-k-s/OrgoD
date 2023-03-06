import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./Hospitals.scss";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React, { Component } from 'react'

export default class Hospitals extends Component {
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
            "http://localhost/Orgod/Project/api/Guest/Hospital.php"
          )
          .then((response) => response.data)
          .then((data) => {
            this.setState({ rows: data });
          });
      }
  render() {
    return (
        <div className="Hospital">
        <Sidebar />
        <div className="HospitalContainer">
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
                    <TableRow key={row.hospital_id}>
                      <TableCell className="tableCell">{row.hospital_id}</TableCell>
                      <TableCell className="tableCell">
                        <div className="cellWrapper">
                          <img src={"http://localhost/OrgoD/Project/api/Assets/hospitalPhoto/"+row.hospital_photo} alt="" className="image" />
                          {row.product}
                        </div>
                      </TableCell>
                      <TableCell className="tableCell">{row.hospital_name}</TableCell>
                      <TableCell className="tableCell">{row.hospital_contact}</TableCell>
                      <TableCell className="tableCell">
                        <span className={`status v${row.hospital_vstatus}`}></span>
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
