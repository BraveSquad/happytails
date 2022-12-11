import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  animalHistory: []

}

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {

    animalHistory(state, action) {
      console.log('History from detailSlice', action.payload)
      state.animalHistory.push(action.payload);
    },
  }
});
export const { animalHistory } = historySlice.actions;

export default historySlice.reducer;