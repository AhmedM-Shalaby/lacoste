import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../Api/httpService";

export const getCartData = createAsyncThunk("cart/getCartData", async (id) => {
  const res = await axios.get(`${baseUrl}/users/${id}`);
  return res.data;
});
export const updataCartData = createAsyncThunk(
  "cart/updataCartData",
  async (data) => {
    axios.patch(`${baseUrl}/users/${data.id}`, { cart: data.cart });
  }
);

const initialState = {
  cart: [],
  totalPrice: 0,
  totalItems: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const obj = state.cart.find((item) => item.id === action.payload.id);
      if (obj) {
        obj.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    removeAll: (state) => {
      console.log(state.cart);
      state.cart = [];
    },
    increaseQuantity: (state, action) => {
      const obj = state.cart.find((item) => item.id === action.payload);
      obj.quantity++;
    },
    decreaseQuantity: (state, action) => {
      const obj = state.cart.find((item) => item.id === action.payload);
      if (obj.quantity > 1) obj.quantity--;
    },
    calcQuantities: (state) => {
      state.totalPrice = state.cart?.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0
      );
      state.totalItems = state.cart?.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getCartData.fulfilled, (state, action) => {
      state.cart = action.payload.cart;
    });
  },
  // extraReducers: {
  //   [getCartData.fulfilled]: (state, action) => {
  //     state.cart = action.payload.cart;
  //   },
  // },
});
export const cartReducer = cartSlice.reducer;
export const {
  addItem,
  removeItem,
  removeAll,
  increaseQuantity,
  decreaseQuantity,
  calcQuantities,
} = cartSlice.actions;
