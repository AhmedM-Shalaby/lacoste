import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  dataPages: [],
  isLoad: false,
  isError: false,
};

export const GetNav = createAsyncThunk(
  "navSlice/GetNav",
  async (Url, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get(Url);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const navSlice = createSlice({
  name: "dataPages",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(GetNav.pending, (state) => {
      state.isLoad = true;
    });
    builder.addCase(GetNav.fulfilled, (state, action) => {
      state.dataPages = action.payload;
      state.isLoad = false;
    });
  },
});

export const navRaducers = navSlice.reducer;
// export const CounterActions = NavSlice.actions;
