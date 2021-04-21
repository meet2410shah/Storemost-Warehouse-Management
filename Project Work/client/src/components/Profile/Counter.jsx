import React, { Component } from "react";
import "./style.css";
class Counter extends Component {
  state = {
    name: "MKT",
    mobile: "7874276874",
    email: "mahakshtrivedi@gmail.com",
    address: "9B, xyz...",
    dueDate: "29-03-2021",
  };
  handleEdit = () => {
    console.log("Edit getting clicked");
  };
  render() {
    return (
      <div className="container p-5 first pr-5">
        <div className="d-flex">
          <div className="mr-auto p-2">
            <h1 className="text-white">Profile</h1>
          </div>
          <div className="p-2 second">
            <button
              onClick={this.handleEdit}
              type="button"
              className="btn btn-outline-light btn p-2 pr-5 pl-5 js-scroll-trigger"
            >
              <i className="fa fa-pencil" aria-hidden="true"></i>
              Edit
            </button>
          </div>
        </div>
        <header>
          <img
            src="/Users/mahakshtrivedi/Downloads/person-24px.png"
            alt=" "
          ></img>
        </header>
        <div className="data">
          <h5>Name : {this.state.name}</h5>
          <h5>Mobile : {this.state.mobile}</h5>
          <h5>Email : {this.state.email}</h5>
          <h5>Due Date : {this.state.dueDate}</h5>
          <h5>Address : {this.state.address}</h5>
        </div>
      </div>
    );
  }
}

export default Counter;
