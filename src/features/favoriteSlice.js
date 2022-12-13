import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoriteArray: []
}

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToFavorites(state, action) {
      console.log('Favorite Array from favoriteSlice', action.payload)
      state.favoriteArray.push(action.payload);
      // console.log('Favorite Array', state.favoriteArray);
    },
  }
});
export const { addToFavorites } = favoriteSlice.actions;

export default favoriteSlice.reducer;