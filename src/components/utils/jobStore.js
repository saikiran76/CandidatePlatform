/** Created the store for data management that includes slices of the store */

import { configureStore } from "@reduxjs/toolkit";
import listingSlice from "./listingSlice";

const jobStore = configureStore({
    reducer:{
        job: listingSlice
    }
})

export default jobStore;