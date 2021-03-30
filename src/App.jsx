import React from "react";
import "./App.scss";
import style from "./components/admin/style.scss"
import Login  from "./components/admin/login" 
import Register from "./components/admin/register"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

class App extends React.Component {
     render(){
        return(
         <BrowserRouter>
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
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
			</Switch>

          </div>
         </BrowserRouter>
       )
     }
};

export default App;