import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoriteArray: undefined,

}

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToFavorites(state, action) {
      console.log('Favorite Array from favoriteSlice=====>>', action.payload)
      state.favoriteArray.push(action.payload);
      // console.log('Favorite Array', state.favoriteArray);

    },
    setFromMongo(state, action) {
      console.log('setFromMongo=====>>', action.payload)
      state.favoriteArray = action.payload;
    }
  }
});
export const { addToFavorites, setFromMongo } = favoriteSlice.actions;

export default favoriteSlice.reducer;