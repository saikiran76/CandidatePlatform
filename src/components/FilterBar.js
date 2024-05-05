/**
 * This is the filter bar where we can filter the listings based on Role, etc
 */
import '../App.css';
import React from "react";
import { DropDown } from './Dropper';
import useData from '../hooks/useData';

const Filter = () =>{
    // const { jobs, loading } = useData();
    // console.log("At Filter, that means hook is being called")
    const {jobs, loading} = useData();
    console.log('jobs that Filter component recieve: ', jobs)

    if (loading) {
        return <div>Loading...</div>;
    }
    
    return(
        <div className='filter-bar'>
            <DropDown jobs={jobs} type="role"/>
            <DropDown jobs={jobs} type="experience"/>
            <DropDown jobs={jobs} type='loc'/>
        </div>
    )
}

export default Filter;