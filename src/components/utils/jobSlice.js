/* job slice for fetching and updating the job list*/

import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
    name:"jobs",
    initialState:{
        list:null

    },
    reducers:{
        addJobs:(state, action)=>{
            state.list = action.payload;
        }
    }
})

export const {addJobs} = jobSlice.actions;
export default jobSlice.reducer;