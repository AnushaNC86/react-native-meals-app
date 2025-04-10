import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ids: [],
};

export const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorites: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFavorites: (state, action) => {
      state.ids?.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addFavorites, removeFavorites } = favoriteSlice.actions;

export default favoriteSlice.reducer;
