/** created slices for actions and reducer functions */

import { createSlice } from "@reduxjs/toolkit";

const listingSlice = createSlice({
    name: "listing",
    initialState:{
        Role: ""
    },
    reducers:{
        setSelectedRole: (state, action)=>{
            state.Role = action.payload;
        }
    }

})

export const {setSelectedRole} = listingSlice.actions;
export default listingSlice.reducer; 