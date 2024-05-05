/**
 * This child component has the listings (being fetched from rest api) and infintely scrollable
 */
import '../App.css';
import {Grid, Typography} from "@mui/material";
import React from "react";
import CardLayout from './Card';

const Listings = () =>{
    return(
        <Grid container spacing={4}>
            <Grid item>
                <CardLayout/>
                <Typography>The first item</Typography>
            </Grid>

        </Grid>
    )
}

export default Listings;