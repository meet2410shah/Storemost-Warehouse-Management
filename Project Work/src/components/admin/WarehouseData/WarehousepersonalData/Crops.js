import React from 'react';
import {useState} from 'react';
import { Link,useHistory } from "react-router-dom";
import "./crops.scss";
import CropsData from   "./cropsdata"
import Name from "./cropsname"

function Crops() {
    return(
        <div className = "background3">
            {/* for logo */}
            <div className = "logo3">
                <h1>Logo</h1>
            </div>

            {/*title*/}
            <div>
                <h1 className = "title3">My Crops</h1>
            </div>

            {/*Result*/}

            <br/><br/>
            <div className = "contenar">
                {CropsData.map((val,index) => {
                    return (
                        <Name
                            //imgsrc = {val.imgsrc}
                            name = {val.name}
                            ava = {val.ava}
                        />  
                    );
            })}
        </div>
        </div>
    );
}

export default Crops;