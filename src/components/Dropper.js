/**
 * DropDown Component
 */

import { TextField } from '@mui/material';
import { useState } from 'react';
import '../App.css'


export const DropDown = () => {
    const [selectedRole, setRole] = useState(''); 

    // sample array for roles
    const roles = ['SWE', 'Intern', 'Product Manager', 'HR Specialist'];

    // handler for event change at dropdown (based on role option)
    const handleChange = (event) => {
      setRole(event.target.value);
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
          {roles.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </TextField>
      </div>
    );
  };
  