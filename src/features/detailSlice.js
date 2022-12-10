import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  animalDetail: [],

}

export const detailSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    animalDetail(state, action) {
      console.log('detailSlice', action.payload)
      state.animalDetail.push(action.payload);
    },
  }
});
export const { animalDetail } = detailSlice.actions;

export default detailSlice.reducer;