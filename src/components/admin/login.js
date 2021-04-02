import React from 'react';
import {useState} from 'react';
import { Link,useHistory } from "react-router-dom";


function Login(){

  const [Email,setEmail]=useState("")
  const [password,setpassword]=useState("")
  const history = useHistory()

  async function signin(){
   // let item = {Email,password}
    //console.warn(item)
      let body = {user_email: 'user_email', password: 'password'}

      let result = await fetch("http://localhost:3000//api/v1/auth/admin",{
         method: 'POST',
         body,
         headers:{
            'content-Type': 'application/json',
            Accept: 'application/json'
         }
      });
      result =await result.json()
      localStorage.setItem('user-info',JSON.stringify(result))
      history.push("/add")
   }

 /*class Login extends React.Component {
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
  }*/

  /*
  submitHandler= async() =>{
       const {username,password} = this.state;
       await loginfunction(username,password)
       }*/
  

 // render() {
    return (
      <div className="button-box" >
            <nav class = "navbar">
              <ul>
              <li type="button" class = "toggle-btn">
                 <Link class="linkbar" to = '/login'>SIGN IN</Link>
              </li>
              <li type="button" class = "toggle-btn">
                 <Link class="linkbar" to = '/register'>SIGN UP</Link>
              </li>
              </ul>
        </nav>
        
      <div className="base-container">
        <div className="content">
         <div className="image">
            <img src = "%PUBLIC_URL%/Logo.svg" alt="Hi......"/>
             </div>     
          {/* <Logo/>*/}
            <div className="form">
            <form /*onSubmit={submitHandler} */ >
            <div className="form-group">
              <label htmlFor="Email">Email</label>
              <input type="Email" name="username" value={Email} placeholder="Email" onChange= {(e) => setEmail(e.target.value)}/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" value={password} placeholder="password" onChange= {(e) => setpassword(e.target.value)} />
            </div>
            </form>
          </div>
        </div>
        <div className="footer">
          <button onClick={signin} type="submit" className="btn1">
            SIGN IN
          </button>
        </div>
        </div>
          <div className="com">
           New to Storemost? 
           {' '}
           <Link to="/register"><div className="divbuttens">Sign Up</div></Link>
         </div>
          <h1>{Email}{password}</h1>
      </div>
    );
 // }
}

export default Login;
