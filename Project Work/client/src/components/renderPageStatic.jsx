import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import logo from "./prologo.png";

class RenderPageStatic extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <div class="d-flex bd-highlight">
          <div class="p-2 flex-shrink-1 bd-highlight">Flex item</div>
          <div class="p-2 w-100 bd-highlight">Flex item</div>
        </div> */}
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.12.1/css/all.css"
          crossorigin="anonymous"
        />
        <div className="container">
          <h1 id="profile">
            <b>Profile</b>
          </h1>
          <button
            onClick={this.props.onClick}
            type="button"
            className="btn btn-outline-light btn p-2 pr-5 pl-5 js-scroll-trigger"
            id="editbtn"
          >
            <i className="fas fa-pencil-alt"></i> Edit
          </button>
        </div>

        <div className="row">
          <div className="col-4 px-md-5" id="vline">
            <img src={logo} alt="Avatar" className="img-thumbnail" id="img" />
            {/* <img src={"./logo192.png"} className="img-thumbnail" /> */}
          </div>
          <div className="col">
            <table className="table">
              <tbody>
                <tr>
                  <td>
                    <h5 className="data" id="mkt1">
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
                      <b>Address</b>
                    </h5>
                  </td>
                  <td className="dataContent">{this.props.address}</td>
                </tr>
                <tr>
                  <td>
                    <h5 className="data">
                      <b>DueDate</b>
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
