import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const liveChatSlice = createSlice({
  name: "livechat",
  initialState,
  reducers: {
addLiveChatMessage: (state, action) => {
    const { payload } = action;
    state.push(payload);

    if (state.length > 30) {
        state.shift();
    }

    return state;
},
  },
});

export const { addLiveChatMessage } = liveChatSlice.actions;

export default liveChatSlice.reducer;