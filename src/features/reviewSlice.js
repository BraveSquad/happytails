import { createSlice } from '@reduxjs/toolkit';
import { map } from 'lodash';

const initialState = {
  reviewArray: undefined,

}

export const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {

    addReview(state, action) {
      console.log('NEW REVIEW')
      state.reviewArray.push(action.payload);
    },
    setReviewsFromMongo(state, action) {
      console.log('setReviewsFromMongo=====>>', action.payload)
      state.reviewArray = action.payload;
    },

    deleteReview(state, action) {
      let itemToBeDeleted = action.payload._id;
      state.reviewArray = state.reviewArray.filter(x => x._id !== itemToBeDeleted)
    },
    reviewToBeUpdated(state, action) {
      console.log('update from review slice=====>', action.payload)
      let updateReview = action.payload;
      state.reviewArray = map(state.reviewArray, x => {
        if (x._id === updateReview._id) {
          return { ...updateReview }
        }
        return x;
      })
    }
  }
});
export const { setReviewsFromMongo, addReview, reviewToBeUpdated } = reviewSlice.actions;

export const deletedReview = (state) => state.review;

export default reviewSlice.reducer;