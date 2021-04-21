import React from 'react';
import {useState} from 'react';
import { Link,useHistory } from "react-router-dom";
import "./supervisor-Staffcustomers.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Customers  from "./supervisor-Customers" ;
import Staff  from "./supervisor-Staff" ;
import Crops  from "./supervisor-Crops" ;
import Open  from "./supervisor-Open" ;
import Topbar from '../supervisor-Topbar';

function Staffcustomers() {
    return(
        <div className = "supervisor-staff-main-div">
            <div className = "supervisor-staffcustomers-div">
                <Link to = "./supervisor-Staffcustomers" className = "supervisor-title">Staff</Link>
                <Link to = "./supervisor-customers" className = "supervisor-title">Farmers</Link>
            </div>
            <div className = "supervisor-staffcustomers-2nd-main-div">
           {/* <React.Fragment>
             <Router>*/}
                <Switch>
                    <Route exact path="/supervisor-staffcustomers2" component={Customers}/>
                    <Route exact path="/supervisor-staffcustomers" component={Staff}/>
                    <Route exact path="/supervisor-customers" component={Customers}/>
                    <Route exact path="/supervisor-crops" component={Crops}/>
                    <Route exact path="/supervisor-open" component={Open}/>
                    <Route exact path="/supervisor-Staff" component={Staff}/>
			    </Switch>
               {/* </Router>
            </React.Fragment>*/}
            </div>
        </div>
    );
}

export default Staffcustomers;