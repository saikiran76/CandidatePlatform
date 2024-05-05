/**
 * This child component has the listings (being fetched from rest api) and its infintely scrollable
 */
import '../App.css';
import {Grid} from "@mui/material";
import React from "react";
import CardLayout from './Card';
import { Data } from './utils/SampleData';
import { useSelector } from 'react-redux';
// import useData from '../hooks/useData';

const Listings = ({jobs}) =>{

    const selectedRole = useSelector((state) => state.job.Role); // subscribing job slice with the Listings using selector
   
    // Filter data based on selected role
    const filteredData = selectedRole
    ? jobs.filter((item) => item.jobRole === selectedRole)
    : jobs;
    
    // loading while fetching
    // if (loading) {
    //     return <div>Loading...</div>;
    // }


    return(
        <Grid container spacing={2}>
            {
                filteredData.map(item => <CardLayout role={item.jobRole} Location={item.location} description={item.jobDetailsFromCompany
                } company={item.companyName
                } key={item}/>)
            }
        </Grid>
    )
}

export default Listings;