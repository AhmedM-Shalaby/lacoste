import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../Api/httpService";

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
  findProduct: false,
};
export const GetData = createAsyncThunk(
  "Products/GetData",
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

export const updataProduct = createAsyncThunk(
  "products/updataProduct",
  async (data) => {
    axios.put(`${baseUrl}/products/${data.id}`, { data });
  }
);
const ProductsSlice = createSlice({
  name: "Products",
  initialState,

  reducers: {
    addProduct: (state, action) => {
      const obj = state.products.find((item) => item.id === action.payload.id);
      if (obj) {
        state.findProduct = true;
      } else {
        state.products.push({ ...action.payload });
      }
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    // updataProduct: (state, action) => {
    //   let obj = state.products.find((item) => item.id === action.payload.id);
    //   console.log(action.payload);
    //   console.log(obj);
    //   // obj = action.payload;
    // },
  },

  extraReducers: (builder) => {
    builder.addCase(GetData.fulfilled, (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
    });
    builder.addCase(GetData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(GetData.rejected, (state) => {
      state.isError = true;
    });
  },
});

export const ProductsReducer = ProductsSlice.reducer;
export const { addProduct, removeProduct } = ProductsSlice.actions;

// extraReducers: {
//   [GetData.pending]: () => {},
//   [GetData.fulfilled]: (state, action) => {
//     state.products = action.payload;
//   },
//   [GetData.rejected]: () => {},
// },
