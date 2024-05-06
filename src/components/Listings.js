/**
 * This child component has the listings (being fetched from rest api) and its infintely scrollable
 * Challenges - implementing infinte scroll and data filtering based on value dispatched from options 
 * - including search feature
 */
import '../App.css';
import {Grid} from "@mui/material";
import React, { useEffect } from "react";
import CardLayout from './Card';
import { useState } from 'react';
import { useSelector} from 'react-redux';
import { useMemo } from 'react';
import Loading from './utils/Loading';


const Listings = ({jobs}) => {
  const searchQuery = useSelector(state => state.jobList.searchQuery);
  
  const selectedRole = useSelector(state => state.jobList.Role);
  const selectedMinExp = useSelector(state => state.jobList.experience);
  const selectedMinSalary = useSelector(state => state.jobList.minBase);
  const selectedLocation = useSelector(state => state.jobList.location);

  // debugging purpose logs
  // console.log('From drop down these are the ones selected')
  // console.log(selectedRole, selectedMinExp, selectedLocation, selectedMinSalary)

  const [card, setCard] = useState([]);
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

  /**filtering out data based on role, experience,.. 
   * also made use of useMemo to memoize the function results to decrese unnecessary re-renders
   * null values are filtered out
  **/

  const filteredData = useMemo(() => {
    if (!card) return [];
  
    return card.filter(job => {
      // Checking for null values in minExp and minJdSalary
      const hasValidMinExp = job.minExp!== null;
      const hasValidMinJdSalary = job.minJdSalary!== null;
  
      const matchesSearch = job.companyName.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesRole =!selectedRole || job.jobRole === selectedRole;
      const matchesExp =!selectedMinExp || parseInt(selectedMinExp) <= job.minExp;
      const matchesSalary =!selectedMinSalary || job.minJdSalary === parseInt(selectedMinSalary);
      const matchesLocation =!selectedLocation || job.location === selectedLocation;
  
      return matchesSearch && matchesRole && matchesExp && matchesSalary && matchesLocation && hasValidMinExp && hasValidMinJdSalary;
    });
  }, [card, searchQuery, selectedRole, selectedMinExp, selectedMinSalary, selectedLocation]);
    
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
      {loading && <Loading/>}
    </Grid>
  );
};

export default React.memo(Listings);

