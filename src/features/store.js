import { configureStore } from '@reduxjs/toolkit';
import animalReducer from './animalSlice';
import cartReducer from './cartSlice'
import detailReducer from './detailSlice'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const presistCartConfig = {
  key: 'cart',
  storage
}

const presistAnimalConfig = {
  key: 'animals',
  storage
}

const presistDetailConfig = {
  key: 'details',
  storage
}

const presistedCartReducer = persistReducer(presistCartConfig, cartReducer);
const presistedAnimalReducer = persistReducer(presistAnimalConfig, animalReducer);
const presistedDetailsReducer = persistReducer(presistDetailConfig, detailReducer);

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    animals: presistedAnimalReducer,
    cart: presistedCartReducer,
    detail: presistedDetailsReducer
  },
});

export const persistor = persistStore(store);