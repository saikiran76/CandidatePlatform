/**
 * Hook to fetch the data from the given restapi and return the data
 */

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addJobs } from "../components/utils/jobSlice";

const useData = () =>{
    const dispatch = useDispatch();
    const jobs = useSelector(store => store.jobList.list);
    const loading = useSelector(store => store.jobList.loading);

    const getData = async()=>{
        try{
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");


            const body = JSON.stringify({
                "limit": 10,
                "offset": 0
               });
               
            const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body
            };

            const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
            const data = await response.json();

            if (data && data.jdList) {
                dispatch(addJobs(data.jdList)); // Assuming addJobs action expects an array of job objects
            } else {
                console.log("No jdList found in API response.");
            }
    
            // dispatch(addJobs(jsonData))
            
            // console.log(`Data from the API ${jsonData}`);
        } catch(error){
            console.log(`Error fetching data ${error}`)
        }
    
    }
    
    useEffect(()=>{
        if (!jobs) {
            getData();
        }
    }, [jobs, dispatch]);

    return { jobs, loading };

    // console.log(`The fetched and dispatched list ${jobs}`)
}

export default useData;