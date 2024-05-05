/** Created the store for data management that includes slices of the store */

import { configureStore } from "@reduxjs/toolkit";
import listingSlice from "./listingSlice";
import jobSlice from "./jobSlice";

const jobStore = configureStore({
    reducer:{
        job: listingSlice,
        jobList: jobSlice
    }
})

export default jobStore;