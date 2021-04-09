import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import Form from "./form";
import Joi from "joi-browser";

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
        <nav className="navbar navbar-expand-lg col-4 px-md-5">
          <div className="row">
            <div className="col">
              <h1>Profile</h1>
            </div>
          </div>
        </nav>
        <div className="row">
          <div className="col-4 px-md-5">
            <img src={"./logo192.png"} className="img-thumbnail" />
          </div>
          <div className="col">
            <form onSubmit={this.handleSubmit}>
              <table className="table">
                <tbody>
                  <tr>
                    <td>
                      <h5 className="data">
                        <b>Name</b>
                      </h5>
                    </td>
                    <td className="dataContent">
                      {this.renderInput("name", "Name")}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h5 className="data">
                        <b>Mobile</b>
                      </h5>
                    </td>
                    <td className="dataContent">
                      {this.renderInput("mobile", "MobileNo")}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h5 className="data">
                        <b>Email</b>
                      </h5>
                    </td>
                    <td className="dataContent">
                      {this.renderInput("email", "Email")}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h5 className="data">
                        <b>address</b>
                      </h5>
                    </td>
                    <td className="dataContent">
                      {this.renderInput("address", "Address")}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h5 className="data">
                        <b>dueDate</b>
                      </h5>
                    </td>
                    <td className="dataContent">
                      {this.renderInput("dueDate", "DueDate")}
                    </td>
                  </tr>
                  <tr>
                    <td>{this.renderButton("Submit")}</td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default RenderPageEditable;
