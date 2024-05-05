/**
 * DropDown Component
 */
import '../App.css'
import { TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedRole } from './utils/listingSlice';
import useData from '../hooks/useData';


export const DropDown = () => {
    const [selectedRole, setRole] = useState(''); 
    const dispatch = useDispatch(); // dispatch an action when option is selected

    // sample array for roles
    const roles = ['SWE', 'Intern', 'Product Manager', 'HR Specialist'];

    useData();

    const jobList = useSelector(store => store.jobList.list);
    // console.log(`subscribed and fetched ${jobList}`)
    // handler for event change at dropdown (based on role option)
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
          {roles.map((role, index) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </TextField>
      </div>
    );
  };
  