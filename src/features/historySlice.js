import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  animalHistory: [],
}

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {

    animalHistory(state, action) {
      console.log('History from detailSlice', action.payload.id)
      if (state.animalHistory.filter(x => x.id !== action.payload.id)) {
        console.log('HERE')
        state.animalHistory.push(action.payload)
      }
    },
  }
});
export const { animalHistory } = historySlice.actions;

export default historySlice.reducer;