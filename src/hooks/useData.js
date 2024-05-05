/**
 * Hook to fetch the data from the given restapi and return the data
 */

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addJobs } from "../components/utils/jobSlice";

const useData = () =>{
    const dispatch = useDispatch();
    const jobs = useSelector(store => store.jobList.list);
    const loading = useSelector(store => store.jobList.loading);

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);

    const getData = async()=>{
        setIsLoading(true);
        setError(null);
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

            const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
            const data = await response.json();

            setItems(prevItems => [...prevItems, ...data]);
            setPage(prevPage => prevPage + 1);

            if (data && data.jdList) {
                dispatch(addJobs(data.jdList)); // Assuming addJobs action expects an array of job objects
                console.log("Jobs fetched initially:", data.jdList)
                alert("Jobs fetched initially:", data.jdList)
            } else {
                console.log("No jdList found in API response.");
                alert("No jdList found in API response.")
            }
    
            // dispatch(addJobs(jsonData))
            
            // console.log(`Data from the API ${jsonData}`);
        } catch(error){
            // console.log(`Error fetching data ${error}`)
            // alert(`Error fetching data ${error}`);
            setError(error);
            console.log("Error fetching data, try resolving", error)
        }finally{
            setIsLoading(false);
        }
    
    }

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) {
          return;
        }
        getData();
      };
    
    useEffect(()=>{
        
        if (!jobs) {
            console.log("Jobs are null and need to be fetched...")
            window.addEventListener('scroll', handleScroll);
        }
    }, [jobs, isLoading]);

    return { jobs, isLoading };

    // console.log(`The fetched and dispatched list ${jobs}`)
}

export default useData;