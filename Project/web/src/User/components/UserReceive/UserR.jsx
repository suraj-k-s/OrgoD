import React, { Component } from 'react'
import "./UserR.css";
import axios from "axios";

export default class HospitalR extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bloodData: [],
      typeData: [],
      organData: [],
      name:"",
      details:"",
      proof:"",
      report:"",
      blood:"",
      organ:"",
      image:"",
      contact:"",
      hospital:sessionStorage.getItem("user-id"),

    };
  }

  saveData = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append('name',this.state.name);
    formData.append('details',this.state.details);
    formData.append('hospital',this.state.hospital);
    formData.append('contact',this.state.contact);
    formData.append('blood',this.state.blood);
    formData.append('organ',this.state.organ);
    formData.append('report',this.state.report);
    formData.append('proof',this.state.proof);
    formData.append('image',this.state.image);
  
 

    axios({

      method: "POST",
      url: "http://localhost/Orgod/Project/api/UserRequest.php",
      data: formData,
      headers:{ "Content-Type": "multipart/form-data"},
      })
      .then(function (response){
        if(response.data)
      {
         window.location='/User';
      }
      });

  };



  inputSet = (e) => {
    this.setState({ [e.target.name]: [e.target.value] });
  };

  inputPhoto = (e) => {
    this.setState({ [e.target.name]: e.target.files[0] });
  };

  getOrgan = (e) => {
    axios
      .get(
        "http://localhost/Orgod/Project/api/Admin/getOrgan.php?id=" +
          e.target.value
      )
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        this.setState({ organData: data });
      });
     
  };

  componentDidMount() {
    axios
      .get(
        "http://localhost/Orgod/Project/api/Admin/Blood.php"
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({ bloodData: data });
      });
      axios
      .get(
        "http://localhost/Orgod/Project/api/Admin/Type.php"
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({ typeData: data });
      });
  }
  render() {
    return (
        <div className="user-form" id="contact">
        {/* left side copy and paste from work section */}
        <div className="w-left">
          <div className="awesome">
            {/* darkMode */}
            <span >Receive as </span>
            <span>User</span>
            <div
              className="blur s-blur1"
              style={{ background: "#ABF1FF94" }}
            ></div>
          </div>
        </div>
        {/* right side form */}
        <div className="c-right">
          <form method='post' onSubmit={this.saveData}>
            <input type="text" required  onChange={this.inputSet} name="name" className="user" placeholder="Name" />
            <textarea name="details"  required onChange={this.inputSet} className="user" placeholder="Details" />
            <input type="file" required onChange={this.inputPhoto} name="report" className="user-file"  />
            <input type="file" required  onChange={this.inputPhoto} name="proof" className="user-file"  />
            <select name='blood' required  onChange={this.inputSet} className="user-sel">
                    <option value={""}>Select Blood</option>
                        {this.state.bloodData.map((result) => (
                          <option key={result.blood_id} value={result.blood_id}>
                            {result.blood_name}
                          </option>
                        ))}
              </select>
              <select name='type' required   onChange={this.getOrgan} className="user-sel">
                    <option value={""}>Select Type</option>
                        {this.state.typeData.map((result) => (
                          <option key={result.type_id} value={result.type_id}>
                            {result.type_name}
                          </option>
                        ))}
              </select>
              <select name='organ' required  onChange={this.inputSet}  className="user-sel">
                    <option value={""}>Select Organ</option>
                        {this.state.organData.map((result) => (
                          <option key={result.organ_id} value={result.organ_id}>
                            {result.organ_name}
                          </option>
                        ))}
              </select>
            <input type="file" required  onChange={this.inputPhoto} name="image" className="user-file" placeholder="Email" />
            <input type="text" required  onChange={this.inputSet} name="contact" className="user" placeholder="Contact" />
            
            <input type="submit" onClick={this.saveData} value="Submit" className="button" />
            {/* <span>{done && "Thanks for Contacting me"}</span> */}
            <div
              className="blur c-blur1"
              style={{ background: "var(--purple)" }}
            ></div>
          </form>
        </div>
      </div>

    )
  }
}
