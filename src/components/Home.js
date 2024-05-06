/**
 * This is the component file that holds the filter bar and the Job listings (Infinite scrolling )
 * used code splitting using lazy loading of listings component
 * to to split JS bundle into smaller chunks.
 */

import React from "react";
// import Listings from "./Listings";
import Filter from "./FilterBar";
import useData from "../hooks/useData";
import { lazy, Suspense } from 'react';
import Loading from "./utils/Loading.js";

const Listings = lazy(() => import('./Listings.js'));

const Home = () =>{
    const { jobs, isLoading } = useData();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return(
        <>
        <Filter jobs={jobs}/>
        <Suspense fallback={<Loading/>}>
            <Listings jobs={jobs} />
        </Suspense>
        </>
    )
}

export default Home;