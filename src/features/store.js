import { configureStore } from '@reduxjs/toolkit';
import animalReducer from './animalSlice';
import cartReducer from './cartSlice'

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    animals: animalReducer,
    cart: cartReducer,
  },
});