import React from 'react';
import "./Sidebar.css";
import { Link,useHistory } from "react-router-dom";
import Details from './details';
import Staff  from "./warehousepersonaldata/Staff" ;
import Customers  from "./warehousepersonaldata/Customers" ;
import Crops  from "./warehousepersonaldata/Crops" ;
import Open  from "./warehousepersonaldata/Open" ;
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Staffcustomers from './warehousepersonaldata/Staffcustomers';
import Staffcustomers2 from './warehousepersonaldata/Staffcustomers2';

function Sidebar(){
    return (
            <div className = "main-slied-bar-div">
                 <div className = "side-bar-div"> 
                    <div className = "details-img-person">
                      <img src = "./person.svg" className = "buttenclass" />
                    </div>
                    <div className = "details-img">
                        <Link to = "./admin-details" className = "sidebar-link">  
                            <img src = "./inventory.svg" className = "buttenclass" />
                        </Link> 
                    </div>
                    <div className = "details-img">
                        <img src = "./logout.svg" className = "buttenclass" />
                    </div>
            </div>
            <Switch>
                    <Route exact path="/admin-bar" component={Details}/>
                    <Route exact path="/admin-details" component={Details}/>
                    <Route exact path="/admin-staffcustomers" component={Staffcustomers}/>
                    <Route exact path="/admin-customers" component={Staffcustomers2}/>
                    <Route exact path="/admin-crops" component={Crops}/>
                    <Route exact path="/admin-open" component={Open}/>
			   </Switch>
            </div>
            )
        }

export default Sidebar;