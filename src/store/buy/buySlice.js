import { createSlice } from "@reduxjs/toolkit";

const Buy = JSON.parse(localStorage.getItem("buy")) || [];

const BuySlice = createSlice({
  name: "buy",
  initialState: {
    productBuy: Buy,
  },
  reducers: {
    addProductBuy: (state, action) => {
      const product = action.payload;
      const existing = state.productBuy.find((item) => item.id === product.id);
      if (existing) {
        existing.qty += 1;
      } else {
        state.productBuy.push({ ...product, qty: 1 });
      }
      localStorage.setItem("buy", JSON.stringify(state.productBuy));
    },

    plusQTY: (state, action) => {
      const data = state.productBuy.find(
        (item) => item.id === action.payload.id,
      );
      if (data) {
        data.qty += 1;
      }
      localStorage.setItem("buy", JSON.stringify(state.productBuy));
    },

    minusQTY: (state, action) => {
      const data = state.productBuy.find(
        (item) => item.id === action.payload.id,
      );
      if (data) {
        if (data.qty > 1) {
          data.qty -= 1;
        } else {
          state.productBuy = state.productBuy.filter(
            (item) => item.id !== action.payload.id,
          );
        }
      }
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
export const { addProductBuy, removeProductBuy, minusQTY, plusQTY } =
  BuySlice.actions;
export default BuySlice.reducer;
