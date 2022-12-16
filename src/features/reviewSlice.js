import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  reviewArray: undefined,

}

export const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {

    setReviewsFromMongo(state, action) {
      console.log('setReviewsFromMongo=====>>', action.payload)
      state.reviewArray = action.payload;
    }
  }
});
export const { setReviewsFromMongo } = reviewSlice.actions;

export default reviewSlice.reducer;