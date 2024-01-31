import { configureStore } from "@reduxjs/toolkit";

/* -----> Slices <----- */
import searchSlice from "./searchSlice";
import sidebarToggleSlice from "./sidebarToggleSlice";


/* -----> Global Store <----- */
const appStore = configureStore({
reducer:{
    search:searchSlice,
    sidebar:sidebarToggleSlice
}
})

/* -----> Export <----- */
export default appStore
