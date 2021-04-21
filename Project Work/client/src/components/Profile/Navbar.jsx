import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Menu from "./menu.svg";
import "./style.css";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <button
          type="button"
          className="btn btn-default"
          aria-label="Left Align"
        >
          {/* <span style={{ fontSize: 30 + "px", cursor: "pointer" }}>
            &#9776 open
          </span> */}
          <div className="menu">
            <img src={Menu} alt="" width="30" />
          </div>
        </button>

        {/* <button type="button" class="btn btn-default btn-lg">
  <span class="glyphicon glyphicon-star" aria-hidden="true"></span> Star
</button> */}
        <a className="navbar-brand" href="#">
          Navbar
        </a>
      </nav>
    );
  }
}

export default Navbar;
