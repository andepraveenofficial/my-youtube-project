import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: true,
};

const sidebarToggleSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleSidebar } = sidebarToggleSlice.actions;

export default sidebarToggleSlice.reducer;