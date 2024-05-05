/**
 * This is the component file that holds the filter bar and the Job listings (Infinite scrolling )
 */

import React from "react";
import Listings from "./Listings";
import Filter from "./FilterBar";

const Home = () =>{
    return(
        <>
        <Filter/>
        <Listings/>
        </>
    )
}

export default Home;