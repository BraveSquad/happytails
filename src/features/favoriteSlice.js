import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // favoriteArray: undefined,
  favoriteArray: [],

}

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToFavorites(state, action) {
      console.log('Favorite Array from favoriteSlice=====>>', action.payload)
      state.favoriteArray.push(action.payload);
    },
    setFromMongo(state, action) {
      console.log('setFromMongo=====>>', action.payload)
      state.favoriteArray = action.payload;
    },
    deleteFavorite(state, action) {
      let itemToBeDeleted = action.payload.id;
      state.favoriteArray = state.favoriteArray.filter(x => x.id !== itemToBeDeleted)
    },
  }
});
export const { addToFavorites, setFromMongo, deleteFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;