/**
 * DropDown Component
 */
import '../App.css'
import { TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedRole } from './utils/listingSlice';
// import useData from '../hooks/useData';


export const DropDown = ({ jobs }) => {
    const [selectedRole, setRole] = useState(''); 
    const dispatch = useDispatch(); // dispatch an action when option is selected

    const roles = jobs ? jobs.map(job => job.jobRole) : [];
    console.log("Roles fetched into dropdown:", roles)
    console.log("Jobs fetched into dropdown", jobs)

    const handleChange = (event) => {
      setRole(event.target.value);
      dispatch(setSelectedRole(event.target.value)) // dispatching an action
    };
  
    return (
      <div>
        <TextField
          select
          SelectProps={{ native: true }}
          className=''
          value={selectedRole} 
          onChange={handleChange}
        >
          <option key="default" value="">
            Roles
          </option>
          {jobs && jobs.map((job, index) => (
            <option key={job.jdUid} value={job.jobRole}>
              {job.jobRole}
            </option>
          ))}
        </TextField>
      </div>
    );
};

  