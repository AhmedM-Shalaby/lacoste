import { configureStore } from "@reduxjs/toolkit";
import { ProductsReducer } from "./Slices/Products";
import { AuthReducers } from "./Slices/Auth";
import { navRaducers } from "./Slices/ConigPages";
import { cartReducer } from "./Slices/Cart";

export const Store = configureStore({
  reducer: {
    auth: AuthReducers,
    data: ProductsReducer,
    Nav: navRaducers,
    shopCart: cartReducer,
  },
});
