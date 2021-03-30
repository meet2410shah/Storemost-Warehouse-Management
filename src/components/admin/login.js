import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';
// import Logo from "./Logo.jpg";

function Login() {
  const [Email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const history = useHistory();

  async function signin() {
    // let item = {Email,password}
    // console.warn(item)
    const body = { user_email: 'user_email', password: 'password' };

    let result = await fetch('http://localhost:3000//api/v1/auth/admin', {
      method: 'POST',
      body,
      headers: {
        'content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    result = await result.json();
    localStorage.setItem('user-info', JSON.stringify(result));
    history.push('/add');
  }

  /* class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      username:"" ,
      password:""
    }
    this.handleChange=this.handleChange.bind(this);

  }

  handleChange(event) {
    const  {name, value} = event.target
    this.setState({
      [name] : value
    })
  } */

  /*
  submitHandler= async() =>{
       const {username,password} = this.state;
       await loginfunction(username,password)
       } */

  // render() {
  return (
    <div className="base-container">
      <div className="content">
        <div>
          <img src="1.jpg" alt="Hi..." />
        </div>
        <div className="form">
          <form>
            <div className="form-group">
              <label htmlFor="Email">Email</label>
              <input type="Email" name="username" value={Email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" value={password} placeholder="password" onChange={(e) => setpassword(e.target.value)} />
            </div>
          </form>
        </div>
      </div>
      <div className="footer">
        <button onClick={signin} type="submit" className="btn">
          SIGN IN
        </button>
      </div>

      <div className="com">
        New to Storemost?
        {' '}
        <Link to="/register"><div className="divbutten">Sign Up</div></Link>
      </div>
      <h1>
        {Email}
        {password}
      </h1>
    </div>
  );
  // }
}

export default Login;
