/**
 * This child component has the listings (being fetched from rest api) and its infintely scrollable
 */
import '../App.css';
import {Grid} from "@mui/material";
import React, { useEffect } from "react";
import CardLayout from './Card';
// import { Data } from './utils/SampleData';
import { useState } from 'react';
import { useSelector} from 'react-redux';
import { useRef } from 'react';
// import useData from '../hooks/useData';  

const Listings = ({ jobs, loading }) => {

    // const [items, setItems] = useState([]);
    // // const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState(null);
    // const [page, setPage] = useState(1);

    const selectedRole = useSelector(state => state.jobList.Role);
    const selectedMinExp = useSelector(state => state.jobList.experience);
    const selectedMinSalary = useSelector(state => state.jobList.minBase);
    const selectedLocation = useSelector(state => state.jobList.location);

    const targetRef = useRef(null);

    useEffect(() => {
        scrollToTarget();
      }, []);

    const scrollToTarget = () => {
        if (targetRef.current) {
          targetRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      };

      

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
        {filteredData.map((item, index) => (
        <React.Fragment key={item.jdUid}>
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
          {index === filteredData.length - 1 && <div ref={targetRef} />}

            </React.Fragment>
          
        ))}
        {loading && <p>Loading...</p>}
        
      </Grid>
    );
};

export default Listings
