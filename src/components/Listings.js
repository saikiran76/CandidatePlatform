/**
 * This child component has the listings (being fetched from rest api) and infintely scrollable
 */
import '../App.css';
import {Grid} from "@mui/material";
import React from "react";
import CardLayout from './Card';
import { Data } from './utils/SampleData';

const Listings = () =>{
    return(
        <Grid container spacing={2}>
            {
                Data.map(item => <CardLayout role={item.role} Location={item.location} description={item.description} company={item.company} key={item}/>)
            }
        </Grid>
    )
}

export default Listings;