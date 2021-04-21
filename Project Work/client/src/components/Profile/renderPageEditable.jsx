import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import Form from "./form";
import Joi from "joi-browser";
import logo from "./image.png";

class RenderPageEditable extends Form {
  state = {
    data: {
      name: this.props.name,
      mobile: this.props.mobile,
      email: this.props.email,
      address: this.props.address,
      dueDate: this.props.dueDate,
    },
    errors: {},
  };

  doSubmit = () => {
    this.props.onClick(this.state.data);
  };

  schema = {
    name: Joi.string().required().label("Username"),
    mobile: Joi.string().min(10).max(10).required().label("Mobile"),
    address: Joi.string().required().label("Email"),
    dueDate: Joi.string().required(),
    email: Joi.string()
      .email({ tlds: { allow: true } })
      .required()
      .label("Email"),
  };

  render() {
    return (
      <React.Fragment>
        {/* <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
        </nav> */}
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.12.1/css/all.css"
          crossorigin="anonymous"
        />
        <div className="container ml-0">
          <h1 id="profile" className="edit-profile-fix">
            <b>Profile</b>
          </h1>
        </div>
        <div className="row">
          <div className="col-3 px-md-5" id="vline">
            <img src={logo} alt="Avatar" className="img-thumbnail" id="img" />
            {/* <img src={"./logo192.png"} className="img-thumbnail" /> */}
          </div>
          <div className="col">
            <form onSubmit={this.handleSubmit}>
              <table className="table">
                <tbody>
                  <tr>
                    <td className="removeLine tableHead">
                      <h5 className="data" id="mkt1">
                        <b>Name</b>
                      </h5>
                    </td>
                    <td className="dataContent removeLine">
                      {this.renderInput("name", "Name")}
                    </td>
                  </tr>
                  <tr>
                    <td className="tableHead">
                      <h5 className="data">
                        <b>Mobile</b>
                      </h5>
                    </td>
                    <td className="dataContent">
                      {this.renderInput("mobile", "MobileNo")}
                    </td>
                  </tr>
                  <tr>
                    <td className="tableHead">
                      <h5 className="data">
                        <b>Email</b>
                      </h5>
                    </td>
                    <td className="dataContent">
                      {this.renderInput("email", "Email")}
                    </td>
                  </tr>
                  <tr>
                    <td className="tableHead">
                      <h5 className="data">
                        <b>address</b>
                      </h5>
                    </td>
                    <td className="dataContent">
                      {this.renderInput("address", "Address")}
                    </td>
                  </tr>
                  <tr>
                    <td className="tableHead">
                      <h5 className="data">
                        <b>dueDate</b>
                      </h5>
                    </td>
                    <td className="dataContent">
                      {this.renderInput("dueDate", "DueDate")}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="submitButton">{this.renderButton("Submit")}</div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default RenderPageEditable;
