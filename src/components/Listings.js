/**
 * This child component has the listings (being fetched from rest api) and its infintely scrollable
 */
import '../App.css';
import {Grid} from "@mui/material";
import React from "react";
import CardLayout from './Card';
import { Data } from './utils/SampleData';
import { useSelector } from 'react-redux';

const Listings = () =>{
    const selectedRole = useSelector((state) => state.job.Role); // subscribing job slice with the Listings using selector

    // Filter data based on selected role
    const filteredData = selectedRole
    ? Data.filter((item) => item.role === selectedRole)
    : Data;


    return(
        <Grid container spacing={2}>
            {
                filteredData.map(item => <CardLayout role={item.role} Location={item.location} description={item.description} company={item.company} key={item}/>)
            }
        </Grid>
    )
}

export default Listings;