/**
 * DropDown Component
 * Created drop down based on the category of drop down
 * Challenges like dealing with null values while mapping to the drop down are dealt here
 */
import '../App.css'
import { TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedRole } from './utils/jobSlice';
import { setMinExperience, setMinSalary, setLocation } from './utils/jobSlice';


export const DropDown = ({ jobs, type = "role" }) => {
  const [selectedRole, setRole] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setRole(event.target.value);
    dispatch(setSelectedRole(event.target.value));
  };

  const handleMinExpChange = (event) => {
    setRole(event.target.value);
    dispatch(setMinExperience(event.target.value));
  };

  const handleMinSalaryChange = (event) => {
    setRole(event.target.value)
    dispatch(setMinSalary(event.target.value));
  };

  const handleLocationChange = (event) => {
    setRole(event.target.value);
    dispatch(setLocation(event.target.value));
  };

  const getUniqueOptions = (property) => {
    const uniqueValues = [...new Set(jobs?.map(job => job[property]) || [])].sort((a, b) => a - b);
    return uniqueValues.map(value => ({
      key: value,
      value: value,
    }));
  };
  

  return (
    <div>
      {
        type === "experience" && 
        <TextField select SelectProps={{native: true}} value={selectedRole} onChange={handleMinExpChange}>
          <option sx={{padding: "5em", backgroundColor: "black"}} className='option' key="default" value="">
            Minimum Experience
          </option>
          {getUniqueOptions('minExp').map(option => (
            <option className='option' key={option.key} value={option.value}>
              {option.value}
            </option>
          ))}
        </TextField>
      }
      {
        type === "salary" && 
        <TextField select SelectProps={{native: true}} value={selectedRole} onChange={handleMinSalaryChange}>
          <option sx={{padding: "5em"}} className='option' key="default" value="">
            Minimum Salary
          </option>
          {getUniqueOptions('minJdSalary').map(option => (
            <option className='option' key={option.key} value={option.value}>
              {option.value}
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
          <option className='option' key="default" value="">
            Location
          </option>
          {getUniqueOptions('location').map(option => (
            <option className='option' key={option.key} value={option.value}>
              {option.value}
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
          <option className='option' key="default" value="">
            Role
          </option>
          {getUniqueOptions('jobRole').map(option => (
            <option className='option' key={option.key} value={option.value}>
              {option.value}
            </option>
          ))}
        </TextField>
      }
    </div>
  );
};
