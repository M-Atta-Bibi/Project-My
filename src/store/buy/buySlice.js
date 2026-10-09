import { createSlice } from "@reduxjs/toolkit";

const Buy = JSON.parse(localStorage.getItem("buy")) || [];
const BuySlice = createSlice({
  name: "buy",
  initialState: {
    productBuy: Buy,
  },
  reducers: {
    addProductBuy: (state, action) => {
      state.productBuy.push(action.payload);
      localStorage.setItem("buy", JSON.stringify(state.productBuy));
    },
    plusQTY: (state, action) => {
      state.productBuy.push(action.payload);
      localStorage.setItem("buy", JSON.stringify(state.productBuy));
    },
    removeProductBuy: (state, action) => {
      state.productBuy = state.productBuy?.filter(
        (item) => item.id !== action.payload.id,
      );
      localStorage.setItem("buy", JSON.stringify(state.productBuy));
    },
  },
});
export const { addProductBuy, removeProductBuy } = BuySlice.actions;
export default BuySlice.reducer;
