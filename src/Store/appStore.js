import { configureStore } from "@reduxjs/toolkit";

/* -----> Slices <----- */
import searchSlice from "./searchSlice";

/* -----> Global Store <----- */
const appStore = configureStore({
reducer:{
    search:searchSlice
}
})

/* -----> Export <----- */
export default appStore
