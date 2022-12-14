import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  animalDetail: {},
  animalHistory: []
}

export const detailSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    animalDetail(state, action) {
      console.log('detailSlice', action.payload)
      state.animalDetail = action.payload;
    },
    animalHistory(state, action) {
      console.log('History from detailSlice', action.payload)
      state.animalHistory.push(action.payload);
    },
  }
});
export const { animalDetail, animalHistory } = detailSlice.actions;

export default detailSlice.reducer;