import React from 'react';
import "./farmer-details.css";
import { Link,useHistory } from "react-router-dom";

function Name(params) {
    return(
        <div className = "farmer-name-main-conta">
             <div className = "farmer-warehouse-img">
             </div>
             <div className = "warehouse-details-div">
             <div className = "flex-1st-div">
                <p className = "link-flex-1st-div"> WareHouse {params.id}  </p> 
                <p className = "occupied-flex-1st-div"> Available: {params.occupied} Quintal</p>
            </div>
            <div className = "flex-2nd-div">
                <p className = "addr-1-flex-2nd-div"> Address:</p>
                <p className = "addr-2-flex-2nd-div"> {params.Address1}</p>
            </div>
            <div className = "flex-3rd-div">
                <p className = "addr-1-flex-2nd-div"> Supervisor:</p>
                <p className = "addr-2-flex-2nd-div"> {params.number}</p>
            </div>
            
        </div>
           {/* <p className = "addr2"> {params.Address2} </p>*/}
            
           {/* <p className = "addr3"> {params.Address3}</p>*/}
        </div>             
    );
}

export default Name;
