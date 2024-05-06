/**
 * This is the filter bar where we can filter the listings based on Role,.. etc
 * It has drop downs and search bar components and children
 */
import '../App.css';
import React from "react";
import { DropDown } from './Dropper';
import useData from '../hooks/useData';
import SearchBar from './search';

const Filter = () =>{
    const {jobs, loading} = useData();
    // For debugging purpose
    // console.log('jobs that Filter component recieve: ', jobs)

    if (loading) {
        return <div>Loading...</div>;
    }
    
    return(
        <div className='filter-bar'>
            <DropDown jobs={jobs} type="role"/>
            <DropDown jobs={jobs} type="experience"/>
            <DropDown jobs={jobs} type='loc'/>
            <SearchBar jobs={jobs} />
        </div>
    )
}

export default Filter;