/**
 * This child component has the listings (being fetched from rest api) and infintely scrollable
 */
import '../App.css';
import { Grid, Typography } from "@mui/material";
import React from "react";

const Listings = () =>{
    return(
        <Grid container spacing={4}>
            <Grid item>
                <Typography>The first item</Typography>
            </Grid>

        </Grid>
    )
}

export default Listings;