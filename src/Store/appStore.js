import { configureStore } from "@reduxjs/toolkit";

/* -----> Slices <----- */
import searchSlice from "./searchSlice";
import sidebarToggleSlice from "./sidebarToggleSlice";
import liveChatSlice from "./liveChatSlice";


/* -----> Global Store <----- */
const appStore = configureStore({
reducer:{
    search:searchSlice,
    sidebar:sidebarToggleSlice,
    livechat:liveChatSlice
}
})

/* -----> Export <----- */
export default appStore
