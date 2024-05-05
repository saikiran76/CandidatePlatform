/**
 * This child component has the listings (being fetched from rest api) and its infintely scrollable
 */
import '../App.css';
import {Grid} from "@mui/material";
import React from "react";
import CardLayout from './Card';
// import { Data } from './utils/SampleData';
import { useSelector } from 'react-redux';
// import useData from '../hooks/useData';

const Listings = ({ jobs }) => {
    const selectedRole = useSelector(state => state.jobList.Role);
    const selectedMinExp = useSelector(state => state.jobList.experience);
    const selectedMinSalary = useSelector(state => state.jobList.minBase);
    const selectedLocation = useSelector(state => state.jobList.location);

    // Corrected filtering logic
    let filteredData = jobs
       ? selectedRole
           ? jobs.filter(item => item.jobRole === selectedRole)
            : jobs
        : [];

    if (selectedMinExp) {
        filteredData = filteredData.filter(item => item.minExp === parseInt(selectedMinExp));
    }

    if (selectedMinSalary) {
        filteredData = filteredData.filter(item => item.minJdSalary === selectedMinSalary);
    }

    if (selectedLocation) {
        filteredData = filteredData.filter(item => item.location === selectedLocation);
    }

    return (
      <Grid container spacing={2}>
        {filteredData.map((item) => (
          <CardLayout
            role={item.jobRole}
            Location={item.location}
            description={item.jobDetailsFromCompany}
            company={item.companyName}
            logoUrl={item.logoUrl}
            minJdSalary={item.minJdSalary}
            maxJdSalary={item.maxJdSalary}
            key={item}
            minExp={item.minExp}
          />
        ))}
      </Grid>
    );
};

export default Listings
