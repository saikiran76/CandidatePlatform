/**
 * This child component has the listings (being fetched from rest api) and its infintely scrollable
 */
import '../App.css';
import {Grid} from "@mui/material";
import React from "react";
import CardLayout from './Card';
import { Data } from './utils/SampleData';
import { useSelector } from 'react-redux';
import useData from '../hooks/useData';

const Listings = () =>{

    // const getData = async()=>{
    //     const myHeaders = new Headers();
    //     myHeaders.append("Content-Type", "application/json");

    //     const body = JSON.stringify({
    //         "limit": 10,
    //         "offset": 0
    //     });
        
    //     const requestOptions = {
    //         method: "POST",
    //         headers: myHeaders,
    //         body
    //     };

    //     const data = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
    //     const JsonData = await data.json()
    //     console.log(JsonData);
    
    // }
    
    // useEffect(()=>getData, []);
    const { jobs, loading } = useData();
    const selectedRole = useSelector((state) => state.job.Role); // subscribing job slice with the Listings using selector

    if (loading) {
        return <div>Loading...</div>; 
    }
    console.log("Jobs:", jobs);

    

    // Filter data based on selected role
    const filteredData = selectedRole
    ? Data.filter((item) => item.role === selectedRole)
    : Data;
    
    // loading while fetching
    if (loading) {
        return <div>Loading...</div>;
    }


    return(
        <Grid container spacing={2}>
            {
                filteredData.map(item => <CardLayout role={item.role} Location={item.location} description={item.description} company={item.company} key={item}/>)
            }
        </Grid>
    )
}

export default Listings;