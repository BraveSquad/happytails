import { configureStore } from '@reduxjs/toolkit';
import animalReducer from './animalSlice';
import detailReducer from './detailSlice'
import favoriteReducer from './favoriteSlice'
import userReducer from './userSlice'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const presistAnimalConfig = {
  key: 'animals',
  storage
}

const presistDetailConfig = {
  key: 'details',
  storage
}

const presistHistoryConfig = {
  key: 'favorite',
  storage
}


const presistUserConfig = {
  key: 'user',
  storage
}


const presistedAnimalReducer = persistReducer(presistAnimalConfig, animalReducer);
const presistedDetailsReducer = persistReducer(presistDetailConfig, detailReducer);
const presistedFavoriteReducer = persistReducer(presistHistoryConfig, favoriteReducer);
const presistedUserReducer = persistReducer(presistUserConfig, userReducer);

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    animals: presistedAnimalReducer,
    detail: presistedDetailsReducer,
    favorite: presistedFavoriteReducer,
    user: presistedUserReducer,
  },
});

export const persistor = persistStore(store);
