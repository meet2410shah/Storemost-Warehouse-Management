import React from 'react';
import "./supervisor-Sidebar.css";
import { Link,useHistory } from "react-router-dom";
/*import Details from './details';*/
import Staff  from "./warehousepersonaldata/supervisor-Staff" ;
import Customers  from "./warehousepersonaldata/supervisor-Customers" ;
import Crops  from "./warehousepersonaldata/supervisor-Crops" ;
import Open  from "./warehousepersonaldata/supervisor-Open" ;
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Staffcustomers from './warehousepersonaldata/supervisor-Staffcustomers';
import Staffcustomers2 from './warehousepersonaldata/supervisor-Staffcustomers2';

function Sidebar(){
    return (
            <div className = "supervisor-main-slied-bar-div">
                 <div className = "supervisor-side-bar-div"> 
                    <div className = "supervisor-details-img-person">
                      <img src = "./person.svg" className = "supervisor-buttenclass" />
                    </div>
                    <div className = "supervisor-details-img">
                        <Link to = "./supervisor-bar" className = "supervisor-sidebar-link">  
                            <img src = "./farmerlist.svg" className = "supervisor-buttenclass" />
                        </Link> 
                    </div>
                    <div className = "supervisor-details-img">
                        <Link to = "./supervisor-staff" className = "supervisor-sidebar-link">  
                            <img src = "./stafflist.svg" className = "supervisor-buttenclass" />
                        </Link> 
                    </div>
                    <div className = "supervisor-details-img">
                        <img src = "./logout.svg" className = "supervisor-buttenclass" />
                    </div>
            </div>
            <Switch>
                    <Route exact path="/supervisor-bar" component={Customers}/>
                    <Route exact path="/supervisor-staff" component={Staff}/>
                    <Route exact path="/supervisor-customers" component={Staffcustomers2}/>
                    <Route exact path="/supervisor-crops" component={Crops}/>
                    <Route exact path="/supervisor-open" component={Open}/>
			   </Switch>
            </div>
            )
        }

export default Sidebar;