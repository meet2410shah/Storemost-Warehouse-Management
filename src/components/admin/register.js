import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';
import Login from './login';

function Register() {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [username, setUserName] = useState('');
  const [Email, setEmail] = useState('');
  const [Mobile, setMoblie] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setNameconfirePassword] = useState('');
  // const history = useHistory()

  async function signup() {
    // let item = {username,Email,password,confirmpassword}
    // console.warn(item)
    const item = {
      firstName: FirstName, lastName: LastName, username, email: Email, mobile: Mobile, password, confirmPassword: confirmpassword,
    };

    console.log(JSON.stringify(item));
    let result = await fetch('//localhost:3000/api/v1/admin/register', {
      // mode: 'no-cors',
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
    });
    result = await result.json();
    console.log(result);
    // localStorage.setItem("user-info",JSON.stringify(result))
    // history.push("/add")
  }

  /* class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
      username:"" ,
      Email:"",
      password:"",
      confirmpassword:""
    }
    this.handleChange=this.handleChange.bind(this)
  }

  handleChange(event) {
    const  {name, value} = event.target
    this.setState({
      [name] : value
    })
  }
  */

  // render() {
  return (
    <div className="base-container">
      <div className="content">
        <div className="form">
          <div className="form-group">
            <label htmlFor="FirstName">Name</label>
            <input type="text" name="FirstName" value={FirstName} placeholder="FirstName" onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="LastName" />
            <input type="text" name="LastName" value={LastName} placeholder="LastName" onChange={(e) => setLastName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="username">UserName</label>
            <input type="text" name="username" value={username} placeholder="Name" onChange={(e) => setUserName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="Email">Email</label>
            <input type="Email" name="Email" value={Email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="Mobile">Mobile No.</label>
            <input type="text" name="Mobile" value={Mobile} placeholder="Mobile No." onChange={(e) => setMoblie(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="text" name="password" value={password} placeholder="password" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="confirmpassword" />
            <input type="text" name="confirmpassword" value={confirmpassword} placeholder="Comfirm password" onChange={(e) => setNameconfirePassword(e.target.value)} />
          </div>
        </div>
      </div>
      <div onClick={signup} className="footer">
        <button type="button" className="btn">
          SIGN UP
        </button>
      </div>

      <div className="com">
        Already have an account?
        <Link to="/login"><div className="divbutten">Sign In</div></Link>
      </div>
      <h1>
        {username}
        {Email}
        {password}
        {confirmpassword}
      </h1>
    </div>
  );
  // }
}
export default Register;
