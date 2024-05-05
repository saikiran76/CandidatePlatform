/**
 * This is the filter bar where we can filter the listings based on Role, etc
 */
import '../App.css';
import { TextField } from "@mui/material";
import React from "react";

const Filter = () =>{
    return(
        <div className="filters">
            <TextField
             select
             SelectProps={{native: true}}
             className=''
             value='Role'
            >
                <option key="default" value="">
                    Roles
                </option>

                <option key="default" value="SWE">
                    SWE
                </option>

                <option key="default" value="Product Manager">
                    Product Manager
                </option>

                <option key="default" value="Intern">
                    Intern
                </option>
            </TextField>
        </div>
    )
}

export default Filter;