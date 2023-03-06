import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React, { Component } from 'react'

export default class Home extends Component {
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
            "http://localhost/Orgod/Project/api/Matching.php?aid=1&hid=&uid="
          )
          .then((response) => response.data)
          .then((data) => {
            console.log(data);
            this.setState({ rows: data });
          });
      }
  render() {
    return (
        <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div className="listContainer">
            <div className="listTitle">Latest</div>
            <TableContainer component={Paper} className="table">
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className="tableCell">ID</TableCell>
                    <TableCell className="tableCell">Receiver</TableCell>
                    <TableCell className="tableCell">Contact</TableCell>
                    <TableCell className="tableCell">Donor</TableCell>
                    <TableCell className="tableCell">Contact</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.rows.map((row) => (
                    <TableRow key={row.receiver_id}>
                      <TableCell className="tableCell">{row.receiver_id}</TableCell>
                      <TableCell className="tableCell">{row.receiver_name}</TableCell>
                      <TableCell className="tableCell">{row.receiver_contact}</TableCell>  
                                          <TableCell className="tableCell">{row.donor_name}</TableCell>

                      <TableCell className="tableCell">{row.donor_contact}</TableCell>
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
