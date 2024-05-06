/**
 * This is the component file that holds the filter bar and the Job listings (Infinite scrolling )
 */

import React from "react";
import Listings from "./Listings";
import Filter from "./FilterBar";
import useData from "../hooks/useData";



const Home = () =>{
    const { jobs, isLoading, getData, fetchMoreData } = useData();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return(
        <>
        <Filter jobs={jobs}/>
        <Listings jobs={jobs} />
        </>
    )
}

export default Home;