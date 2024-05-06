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
// import useData from '../hooks/useData';  

const Listings = () => {

    // const [items, setItems] = useState([]);
    // // const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState(null);
    // const [page, setPage] = useState(1);

    const selectedRole = useSelector(state => state.jobList.Role);
    const selectedMinExp = useSelector(state => state.jobList.experience);
    const selectedMinSalary = useSelector(state => state.jobList.minBase);
    const selectedLocation = useSelector(state => state.jobList.location);

    const [card, setCard] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);

    const getCardData = async () => {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const body = JSON.stringify({
          "limit": 20,
          "offset": page
          });
          
      const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body
      };

      const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
      const data = await response.json();
      // const res = await fetch(
      //   `https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`
      // );
      // const data = await res.json();
      // console.log(data);
      setCard((prev) => [...prev, ...data.jdList]);
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

    let filteredData = card
       ? selectedRole
           ? card.filter(item => item.jobRole === selectedRole)
            : card
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
            </React.Fragment>
          
        ))}
        
        
        {loading && <p>Loading...</p>}
        
      </Grid>
  
    );
};

export default Listings
