import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

class RenderPageStatic extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg col-4 px-md-5">
          <div className="row">
            <div className="col">
              <h1>Profile</h1>
            </div>
            <div className="col-2">
              <button
                onClick={this.props.onClick}
                type="button"
                className="btn btn-outline-light btn p-2 pr-5 pl-5 js-scroll-trigger"
              >
                <i className="fa fa-pencil" aria-hidden="true"></i>
                {/* <img src={"./pencil.png"} className="img-thumbnail" /> */}
                Edit
              </button>
            </div>
          </div>
        </nav>
        <div className="row">
          <div className="col-4 px-md-5">
            <img src={"./logo192.png"} className="img-thumbnail" />
          </div>
          <div className="col">
            <table className="table">
              <tbody>
                <tr>
                  <td>
                    <h5 className="data">
                      <b>Name</b>
                    </h5>
                  </td>
                  <td className="dataContent">{this.props.name}</td>
                </tr>
                <tr>
                  <td>
                    <h5 className="data">
                      <b>Mobile</b>
                    </h5>
                  </td>
                  <td className="dataContent">{this.props.mobile}</td>
                </tr>
                <tr>
                  <td>
                    <h5 className="data">
                      <b>Email</b>
                    </h5>
                  </td>
                  <td className="dataContent">{this.props.email}</td>
                </tr>
                <tr>
                  <td>
                    <h5 className="data">
                      <b>address</b>
                    </h5>
                  </td>
                  <td className="dataContent">{this.props.address}</td>
                </tr>
                <tr>
                  <td>
                    <h5 className="data">
                      <b>dueDate</b>
                    </h5>
                  </td>
                  <td className="dataContent">{this.props.dueDate}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default RenderPageStatic;
