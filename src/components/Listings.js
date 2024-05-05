/**
 * This child component has the listings (being fetched from rest api) and infintely scrollable
 */
import '../App.css';
import {Grid} from "@mui/material";
import React from "react";
import CardLayout from './Card';

const Listings = () =>{
    return(
        <Grid container spacing={2}>
            <CardLayout/>
            <CardLayout/>
            <CardLayout/>
            <CardLayout/>
            <CardLayout/>
            <CardLayout/>
            <CardLayout/>
            <CardLayout/>
            <CardLayout/>
            <CardLayout/>
        </Grid>
    )
}

export default Listings;