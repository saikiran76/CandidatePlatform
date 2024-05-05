/* job slice for fetching and updating the job list*/

import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "jobList",
  initialState: {
    Role:"",
    list: null,
    experience: null,
    minBase: 0,
    location: "",
  },
  reducers: {
    addJobs: (state, action) => {
      state.list = action.payload;
    },
    setMinExperience: (state, action) => {
      state.experience = action.payload;
    },
    setMinSalary: (state, action) => {
      state.minBase = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setSelectedRole: (state, action) => {
      state.Role = action.payload;
    },
  },
});

export const {
  addJobs,
  setMinExperience,
  setMinSalary,
  setLocation,
  setSelectedRole,
} = jobSlice.actions;
export default jobSlice.reducer;