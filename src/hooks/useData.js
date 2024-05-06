/**
 * Hook to fetch the data from the given restapi and return the data to use it as props 
 * in other components
 */

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addJobs } from "../components/utils/jobSlice";
import { API_URL } from "../components/utils/constants";

const useData = () =>{
    const dispatch = useDispatch();
    const jobs = useSelector(store => store.jobList.list);
    
    const getData = async()=>{
        try{
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            const body = JSON.stringify({
                "limit": 20,
                "offset": 0
               });
               
            const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body
            };

            const response = await fetch(API_URL, requestOptions);
            const data = await response.json();

            if (data && data.jdList) {
                dispatch(addJobs(data.jdList)); 
                console.log("Jobs fetched initially:", data.jdList)
            } else {
                console.log("No jdList found in API response.");
            }

        } catch(error){
            console.log("Error fetching data, try resolving", error)
        }
    
    }
    
    useEffect(()=>{
        
        if (!jobs) {
            console.log("Jobs are null and need to be fetched...")
            getData();
        }
    }, [jobs]);

    return { jobs };

}

export default useData;
