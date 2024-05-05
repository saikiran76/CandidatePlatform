/**
 * Hook to fetch the data from the given restapi and return the data
 */

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addJobs } from "../components/utils/jobSlice";

const useData = () =>{
    const dispatch = useDispatch();
    const jobs = useSelector(store => store.jobList.list);

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

            const data = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
            const JsonData = await data.json()
            dispatch(addJobs(JsonData))
            
            console.log(JsonData);
        } catch(error){
            console.log(`Error fetching data ${error}`)
        }
    
    }
    
    useEffect(()=>{
        !jobs && getData()
    }, []);

    console.log(`The fetched and dispatched list ${jobs}`)
}

export default useData;