import React, { Component } from 'react'
import "./Hospital.css";
import axios from "axios";

export default class Hospital extends Component {
  constructor(props) {
    super(props);
    this.state = {
      districtData: [],
      placeData: [],
      name:"",
      email : "",
      phone : "",
      address:"",
      place:"",
      password:"",
      photo:"",
      proof : "",
    };
  }

  saveData = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append('name',this.state.name);
    formData.append('email',this.state.email);
    formData.append('phone',this.state.phone);
    formData.append('address',this.state.address);
    formData.append('place',this.state.place);
    formData.append('password',this.state.password);
    formData.append('proof',this.state.proof);
    formData.append('photo',this.state.photo);


    axios({

      method: "POST",
      url: "http://localhost/Orgod/Project/api/Guest/Hospital.php",
      data: formData,
      headers:{ "Content-Type": "multipart/form-data"},
      })
      .then(function (response){
        if(response.data)
      {
        window.location='/Login';
      }
      });

  };



  inputSet = (e) => {
    this.setState({ [e.target.name]: [e.target.value] });
  };

  inputPhoto = (e) => {
    this.setState({ [e.target.name]: e.target.files[0] });
  };

  getPlace = (e) => {
    axios
      .get(
        "http://localhost/Orgod/Project/api/Admin/GetPlace.php?id=" +
          e.target.value
      )
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        this.setState({ placeData: data });
      });
  };

  componentDidMount() {
    axios
      .get(
        "http://localhost/Orgod/Project/api/Admin/District.php"
      )
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        this.setState({ districtData: data });
      });
  }
  render() {
    return (
        <div className="user-form" id="contact">
        {/* left side copy and paste from work section */}
        <div className="w-left">
          <div className="awesome">
            {/* darkMode */}
            <span >Register as </span>
            <span>Hospital</span>
            <div
              className="blur s-blur1"
              style={{ background: "#ABF1FF94" }}
            ></div>
          </div>
        </div>
        {/* right side form */}
        <div className="c-right">
          <form method='post' onSubmit={this.saveData}>
            <input type="text" required onChange={this.inputSet} name="name" className="user" placeholder="Name" />
            <input type="text"required onChange={this.inputSet} name="phone" className="user" placeholder="Contact" />
            <input type="email"required onChange={this.inputSet} name="email" className="user" placeholder="Email" />
            <select name='district' required onChange={this.getPlace} className="user-sel">
                    <option value={""}>Select District</option>
                        {this.state.districtData.map((result) => (
                          <option key={result.district_id} value={result.district_id}>
                            {result.district_name}
                          </option>
                        ))}
              </select>
              <select name='place' required onChange={this.inputSet} className="user-sel">
                         {this.state.placeData.map((result) => (
                          <option key={result.place_id} value={result.place_id}>
                            {result.place_name}
                          </option>
                        ))}
              </select>
            <input type="file" required onChange={this.inputPhoto} name="proof" className="user-file" placeholder="Email" />
            <input type="file" required onChange={this.inputPhoto} name="photo" className="user-file" placeholder="Email" />
            <input type="password" required onChange={this.inputSet} name="password" className="user" placeholder="Password" />
            <textarea name="address" required onChange={this.inputSet} className="user" placeholder="Address" />
            <input type="submit"  value="Submit" className="button" />
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
