import { createSlice } from "@reduxjs/toolkit";
import { EngLang } from "../../utils/constants";

const initialState = {
  language: EngLang,
  order: {
    service: "",
  },
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    selectLanguage: (state, action) => {
      state.language = action.payload;
    },
    selectService: (state, action) => {
      state.order.service = action.payload;
    },
  },
});

export default orderSlice.reducer;
export const { selectLanguage, selectService } = orderSlice.actions;
