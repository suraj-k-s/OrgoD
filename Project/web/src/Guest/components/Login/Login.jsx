import React, { Component } from 'react';
import axios from "axios";
import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_email: "",
      user_password: "",
      type: "",
      id: "",
    };
  }
  inputSet = (e) => {
    this.setState({ [e.target.name]: [e.target.value] });
  };

  saveData = (e) => {
    e.preventDefault();


    const formData = new FormData();

    formData.append('email',this.state.user_email);
    formData.append('password',this.state.user_password);

    axios({

      method: "POST",
      url: "http://localhost/Orgod/Project/api/Guest/Login.php",
      data: formData,
      headers:{ "Content-Type": "multipart/form-data"},

      }).then((response) => response.data)
      .then((data) => {
        if (JSON.stringify(data) === "[]") {
          alert("Invalid User");
        }
        else if (data[1] === "Admin") {
          window.sessionStorage.setItem('admin-id', data[0].admin_id);
          window.location = '/Admin';
        }
        else if (data[1] === "Hospital") {
          window.sessionStorage.setItem('hospital-id', data[0].hospital_id);
          window.location = '/Hospital';
        }
        else if (data[1] === "User") {
          window.sessionStorage.setItem('user-id', data[0].user_id);
          window.location = '/User';
        }
        
      });
  };
  render() {
    return (
      <div className="contact-form" id="contact">
        {/* left side copy and paste from work section */}
        <div className="w-left">
          <div className="awesome">
            {/* darkMode */}
            <span >Signup</span>
            <span>to Website</span>
            <div
              className="blur s-blur1"
              style={{ background: "#ABF1FF94" }}
            ></div>
          </div>
        </div>
        {/* right side form */}
        <div className="c-right">
          <form method='post' onSubmit={this.saveData}>
            <input type="email" required  name="user_email" onChange={this.inputSet} className="user" placeholder="Email" />
            <input type="password" required name="user_password" onChange={this.inputSet} className="user" placeholder="Password" />
            <input type="submit" value="Login" className="button" />
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
