/**
 * DropDown Component
 */
import '../App.css'
import { TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { setSelectedRole} from './utils/listingSlice';
import { setSelectedRole } from './utils/jobSlice';
import { setMinExperience, setMinSalary, setLocation } from './utils/jobSlice';

// import useData from '../hooks/useData';


export const DropDown = ({ jobs, type = "role" }) => {
    const [selectedRole, setRole] = useState("");
    // const [num, setNum] = useState(0);
    const dispatch = useDispatch();
  
    const roles = jobs? jobs.map((job) => job.jobRole) : [];
    console.log("Roles fetched into dropdown:", roles);
    console.log("Jobs fetched into dropdown", jobs);
  
    const handleChange = (event) => {
      setRole(event.target.value);
      dispatch(setSelectedRole(event.target.value));
    };
  
    const handleMinExpChange = (event) => {
      setRole(event.target.value);
      dispatch(setMinExperience(event.target.value));
    };
  
    const handleMinSalaryChange = (event) => {
      dispatch(setMinSalary(event.target.value));
    };

    const handleLocationChange = (event)=>{
        setRole(event.target.value)
        dispatch(setLocation(event.target.value))
    }
  
    return (
      <div>
        {
        type === "experience" && <TextField select SelectProps={{native: true}} value={selectedRole} onChange={handleMinExpChange}>
        <option key="default" value="">
            Minimum Experience
        </option>
        {jobs && jobs.map((job) => (
            <option key={job.jdUid} value={job.minExp}>
              {job.minExp}
            </option>
          ))}
        </TextField>

        }
        {
        type === "salary" && <TextField select SelectProps={{native: true}} value={selectedRole} onChange={handleMinSalaryChange}>
        <option key="default" value="">
            Minimum Salary
        </option>
        {jobs && jobs.map((job, index) => (
            <option key={job.jdUid} value={job.minJdSalary}>
              {job.minJdSalary}
            </option>
          ))}
        </TextField>

        }
        
        {
        type === "loc" &&
        <TextField
          select
          SelectProps={{ native: true }}
          className=''
          value={selectedRole} 
          onChange={handleLocationChange}
        >
          <option key="default" value="">
            Location
          </option>
          {jobs && jobs.map((job, index) => (
            <option key={job.jdUid} value={job.location}>
              {job.location}
            </option>
          ))}
        </TextField>
        }
        {
            type === "role" &&
            <TextField
              select
              SelectProps={{ native: true }}
              className=''
              value={selectedRole} 
              onChange={handleChange}
            >
              <option key="default" value="">
                Role
              </option>
              {jobs && jobs.map((job, index) => (
                <option key={job.jdUid} value={job.jobRole}>
                  {job.jobRole}
                </option>
              ))}
            </TextField>

        }
      </div>
    );
};
