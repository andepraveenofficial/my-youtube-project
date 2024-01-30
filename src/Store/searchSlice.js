import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const searchSlice = createSlice({
    name:"search",
    initialState,
    reducers:{
        // Actions
        cacheResults : (state, action) => {
        const {payload} = action;  // {"ip":["iphone", "iphone11"]}
        // state = { ...state, ...payload }; // merge and create new Object
		// Object.assign(state, payload); // update existing state Object
        return { ...state, ...payload }
        }
    }
})

/*
Cache : 

time complexity for search in array = [i, ip, iph, ipho, iphone] => 0(n)
time complexity for search in Object = {i:values, ip:values, iph:values, ipho:values, iphone:values} => 0(1)
*/

// dispatch
export const { cacheResults } = searchSlice.actions;

// configureStore
export default searchSlice.reducer;
