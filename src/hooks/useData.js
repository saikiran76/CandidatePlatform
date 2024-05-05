/**
 * Hook to fetch the data from the given restapi and return the data
 */

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addJobs } from "../components/utils/jobSlice";

const useData = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobList.list);
  const loading = useSelector((state) => state.jobList.loading);

  const getData = async () => {
    try {
      const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ limit: 10, offset: 0 }),
      });
      const data = await response.json();

      if (data && data.jdList) {
        dispatch(addJobs(data.jdList));
        console.log("Jobs fetched initially:", data.jdList);
      } else {
        console.log("No jdList found in API response.");
      }
    } catch (error) {
      console.log("Error fetching data, try resolving", error);
    }
  };

  useEffect(() => {
    if (!jobs) {
      console.log("Jobs are null and need to be fetched...");
      getData();
    }
  }, [jobs]);

  return { jobs, loading };
};

export default useData;