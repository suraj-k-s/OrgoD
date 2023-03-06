import React, { Component } from 'react'
import "./Matching.css";
import axios from "axios";
import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default class Matching extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matchingData: [],
      id: sessionStorage.getItem("user-id"),

    };
  }
  componentDidMount() {
    axios
      .get(
        "http://localhost/Orgod/Project/api/Matching.php?aid=&hid=&uid="+this.state.id
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({ matchingData: data });
      });
  }
  render() {
    return (
      <div className="user-form" id="contact">
        <h1>Matches Found</h1>
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
              {this.state.matchingData.map((row) => (
                <TableRow key={row.receiver_id}>
                  <TableCell className="tableCell">{row.receiver_id}</TableCell>
                  {/* <TableCell className="tableCell">
                    <div className="cellWrapper">
                      <img src={row.img} alt="" className="image" />
                      {row.product}
                    </div>
                  </TableCell> */}
                  <TableCell className="tableCell">{row.receiver_name}</TableCell>
                  <TableCell className="tableCell"><a style={{textDecoration:"none"}} href={`tel:${row.receiver_contact}`}>{row.receiver_contact}</a></TableCell>
                  <TableCell className="tableCell">{row.donor_name}</TableCell>
                  <TableCell className="tableCell"><a  style={{textDecoration:"none"}} href={`tel:${row.donor_contact}`}>{row.donor_contact}</a></TableCell>
                  {/* <TableCell className="tableCell">
                    <span className={`status ${row.status}`}>{row.status}</span>
                  </TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

    )
  }
}
