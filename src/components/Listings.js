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
import { useMemo } from 'react';
// import useData from '../hooks/useData';  

const Listings = ({jobs}) => {
  const selectedRole = useSelector(state => state.jobList.Role);
  const selectedMinExp = useSelector(state => state.jobList.experience);
  const selectedMinSalary = useSelector(state => state.jobList.minBase);
  const selectedLocation = useSelector(state => state.jobList.location);

  console.log('From drop down these are the ones selected')
  console.log(selectedRole, selectedMinExp, selectedLocation, selectedMinSalary)

  const [card, setCard] = useState(Array.isArray(jobs) ? jobs : []);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const getCardData = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      "limit": 10,
      "offset": page
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body
    };

    const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
    const data = await response.json();
    console.log('the jobs at getCardData', jobs)

    setCard(prevCard => [...prevCard, ...data.jdList]);
    setLoading(false);
  };

  useEffect(() => {
    getCardData();
  }, [page]);

  const handelInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);

  // const filteredData = useMemo(() => {
  //   if (!card) return [];

  //   console.log("selectedRole from filter:", selectedRole);
  //   console.log("card:", card);
  //   const filteredCards = card ? selectedRole ? card.filter(item => {
  //     let isValid = false;
  //     if (selectedRole && selectedRole !== item.jobRole) isValid = true;
  //     if (selectedMinExp && parseInt(selectedMinExp) !== item.minExp) isValid = true;
  //     if (selectedMinSalary && selectedMinSalary !== item.minJdSalary.toString()) isValid = true 
  //     if (selectedLocation && selectedLocation !== item.location) isValid = true
  //     return isValid;
  //   });
    
  //   return filteredCards.length > 0 ? filteredCards : card; 
  // }, [card, selectedRole, selectedMinExp, selectedMinSalary, selectedLocation]);

  // let filteredData = card
  //      ? selectedRole
  //          ? card.filter(item => item.jobRole === selectedRole)
  //           : card
  //       : [];

  //   if (selectedMinExp) {
  //       filteredData = filteredData.filter(item => item.minExp === parseInt(selectedMinExp));
  //   }

  //   if (selectedMinSalary) {
  //       filteredData = filteredData.filter(item => item.minJdSalary === selectedMinSalary);
  //   }

  //   if (selectedLocation) {
  //       filteredData = filteredData.filter(item => item.location === selectedLocation);
  //   }
  const filteredData = useMemo(() => {
    console.log("Filtering Data...");
    console.log("card:", card);
    console.log("selectedRole:", selectedRole);
    console.log("selectedMinExp:", selectedMinExp);
    console.log("selectedMinSalary:", selectedMinSalary);
    console.log("selectedLocation:", selectedLocation);
  
    const filtered = card.filter(
      item =>
        (!selectedRole || item.jobRole === selectedRole) &&
        (!selectedMinExp || parseInt(selectedMinExp) <= item.minExp) &&
        (!selectedMinSalary || item.minJdSalary === selectedMinSalary) &&
        (!selectedLocation || item.location === selectedLocation)
    );
  
    console.log("Filtered Data:", filtered);
    return filtered;
  }, [card, selectedRole, selectedMinExp, selectedMinSalary, selectedLocation]);

  console.log('The final filtered data from callback', filteredData)
  
  
  
  
  
  return (
    <Grid container spacing={2}>
      {filteredData.map((item, index) => (
        <React.Fragment key={index}>
          <CardLayout
            role={item.jobRole}
            Location={item.location}
            description={item.jobDetailsFromCompany}
            company={item.companyName}
            logoUrl={item.logoUrl}
            minJdSalary={item.minJdSalary}
            maxJdSalary={item.maxJdSalary}
            // key={item}
            minExp={item.minExp}
          />
        </React.Fragment>
      ))}
      {loading && <p>Loading...</p>}
    </Grid>
  );
};

export default Listings;

