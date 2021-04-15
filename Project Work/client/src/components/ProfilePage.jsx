import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import RenderPageStatic from "./renderPageStatic";
import RenderPageEditable from "./renderPageEditable";

class ProfilePage extends Component {
  state = {
    name: "MKT",
    mobile: "7874276874",
    email: "mahakshtrivedi@gmail.com",
    address: "9B, xyz...",
    dueDate: "29-03-2021",
    edit: false,
  };

  handleEdit = () => {
    console.log("handleEdit");
    this.setState({ edit: true });
  };

  handleSubmit = (data) => {
    console.log(data);
    this.setState({ name: data.name });
    this.setState({ mobile: data.mobile });
    this.setState({ email: data.email });
    this.setState({ address: data.address });
    this.setState({ dueDate: data.dueDate });
    this.setState({ edit: false });
    console.log("submitted");
    //call backend to update stuff
  };

  render() {
    if (this.state.edit)
      return <RenderPageEditable {...this.state} onClick={this.handleSubmit} />;
    else {
      return <RenderPageStatic {...this.state} onClick={this.handleEdit} />;
    }
  }
}

export default ProfilePage;
