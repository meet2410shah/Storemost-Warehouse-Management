import React from 'react';
import {useState} from 'react';
import { Link,useHistory } from "react-router-dom";
import "./Staffcustomers.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Customers  from "./Customers" ;
import Staff  from "./Staff" ;
import Crops  from "./Crops" ;
import Open  from "./Open" ;

function Staffcustomers2() {
    return(
        <div className = "staff-main-div">
            <div className = "staffcustomers-div">
                <Link to = "./admin-Staffcustomers" className = "title">Staff</Link>
                <Link to = "./admin-customers" className = "title">Farmers</Link>
            </div>
            <div className = "staffcustomers-2nd-main-div">
           {/* <React.Fragment>
             <Router>*/}
                <Switch>
                    <Route exact path="/admin-staffcustomers2" component={Customers}/>
                    <Route exact path="/admin-staffcustomers" component={Staff}/>
                    <Route exact path="/admin-customers" component={Customers}/>
                    <Route exact path="/admin-crops" component={Crops}/>
                    <Route exact path="/admin-open" component={Open}/>
                    <Route exact path="/admin-Staff" component={Staff}/>
			    </Switch>
               {/* </Router>
            </React.Fragment>*/}
             
        
            </div>
        </div>
    );
}

export default Staffcustomers2;