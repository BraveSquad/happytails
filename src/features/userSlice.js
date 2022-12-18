import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  newUser: '',
  favorite: [],

}


export const userSlice = createSlice({

  name: 'user',
  initialState,
  reducers: {
    addToFavorites(state, action) {
      console.log('Favorite Array from favoriteSlice', action.payload)
      state.favoriteArray.push(action.payload);

    },
  }

});


export const { addToFavorites } = userSlice.actions;

export default userSlice.reducer;