import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataPages: [],
};

const navSlice = createSlice({
  name: "dataPages",
  initialState,
  reducers: {},
});

export const navRaducers = navSlice.reducer;
// export const CounterActions = NavSlice.actions;
