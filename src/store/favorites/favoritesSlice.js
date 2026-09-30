import { createSlice } from "@reduxjs/toolkit";

const favorite = JSON.parse(localStorage.getItem("favorite")) || [];
const FavoritesSlice = createSlice({
  name: "favorite",
  initialState: { Favorites: favorite },
  reducers: {
    addToFavorites: (state, action) => {
      state.Favorites.push(action.payload);
      localStorage.setItem("favorite", JSON.stringify(state.Favorites));
    },
    removeFromFavorites: (state, action) => {
      state.Favorites = state.Favorites.filter(
        (item) => item.id !== action.payload.id,
      );
      localStorage.setItem("favorite", JSON.stringify(state.Favorites));
    },
  },
});
export const { addToFavorites, removeFromFavorites } = FavoritesSlice.actions;
export default FavoritesSlice.reducer;
