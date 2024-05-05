/**
 * This is the filter bar where we can filter the listings based on Role, etc
 */
import '../App.css';
import React from "react";
import { DropDown } from './Dropper';

const Filter = () =>{
    return(
        <div className='filter-bar'>
            <DropDown/>
        </div>
    )
}

export default Filter;