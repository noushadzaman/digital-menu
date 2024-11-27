import { configureStore } from "@reduxjs/toolkit";
import orderSlice from "../features/order/orderSlice";

export const store = configureStore({
  reducer: {
    order: orderSlice,
  },
});
