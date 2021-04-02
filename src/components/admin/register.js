import React from 'react';
import {useState} from 'react';
import { Link,useHistory } from "react-router-dom";
import Login from './login';

function Register(){

   const [FirstName,setFirstName]=useState("") 
   const [LastName,setLastName]=useState("")
   const [username,setUserName]=useState("") 
   const [Email,setEmail]=useState("")
   const [Mobile,setMoblie]=useState("")
   const [password,setPassword]=useState("")
   const [confirmpassword,setconfirePassword]=useState("")
   const history = useHistory()
   const [IsError,setIsError]=useState("")

   async function signup(){
     // let item = {FirstName,LastName,username,Email,Mobile,password,confirmpassword}
     // console.warn(item)
       let body = {first_name: FirstName, last_name: LastName, username: username, email: Email, mobile: Mobile, password: password, confirmpassword: confirmpassword};
       console.log(JSON.stringify(item));

      let result = await fetch("http://localhost:3000/api/v1/admin/register",{
        // mode: 'no-cors',
         method: 'POST',
         body:JSON.stringify(item),
         headers:{
          'content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true,
         },
      });
      result =await result.json()
      console.log(result)
     // localStorage.setItem("user-info",JSON.stringify(result))
     // history.push("/add")
   }
 
   const checkvalidation = (e) => {
    const confpass = e.target.value;
    setconfirePassword(confpass);
    if(password != confpass)
    {
        setIsError("Password and Confire Password are not same.");
    }
    else
    {
        setIsError("");
    }
   }

   /*class Register extends React.Component {
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

  //render() {
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
        <div style = {{marginLeft: 5, top: 10 ,textAlign:'center'}}>
           {IsError}
         </div>
          <div className="form">
          <div className="form-group">
              <label htmlFor="FirstName">Name</label>
              <input type="text" name="FirstName" value={FirstName} placeholder="First Name"  onChange= {(e) => setFirstName(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="LastName"></label>
              <input type="text" name="LastName" value={LastName} placeholder="Last Name"  onChange= {(e) => setLastName(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="username">User Name</label>
              <input type="text" name="username" value={username} placeholder="User Name"  onChange= {(e) => setUserName(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="Email">Email</label>
              <input type="Email" name="Email" value={Email}  placeholder="Email" onChange= {(e) => setEmail(e.target.value)}/>
            </div>
             <div className="form-group">
              <label htmlFor="Mobile">Mobile No.</label>
              <input type="text" name="Mobile" value={Mobile}  placeholder="Mobile No." onChange= {(e) => setMoblie(e.target.value)}/>
            </div>
           <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" value={password} placeholder="password" onChange= {(e) => setPassword(e.target.value)}/>
            </div>
            <div className="form-group">
              <label htmlFor="confirmpassword"></label>
              <input type="password" name="confirmpassword" value={confirmpassword} placeholder="Comfirm password" onChange= {(e) => checkvalidation(e)}/>
            </div>
          </div>
          </div>
        </div>
        <div onClick={signup} className="footer">
          <button type="button" className="btn2">
              SIGN UP
          </button>
        </div>
         <div className="com">
             Already have an account? 
             <Link to = "/login">
                <div className="divbuttens">Sign In</div>
            </Link>
         </div>
         
         <h1>{username}{Email}{password}{confirmpassword}</h1>
      </div>
    );
  //}
}
export default Register;