import { configureStore } from '@reduxjs/toolkit';
import animalReducer from './animalSlice';
import detailReducer from './detailSlice'
import favoriteReducer from './favoriteSlice'
import userReducer from './userSlice'
import reviewReducer from './reviewSlice'
import calendarReducer from './calendarSlice'
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

const presistReviewConfig = {
  key: 'user',
  storage
}
const presistCalendarConfig = {
  key: 'calendar',
  storage
}




const presistedAnimalReducer = persistReducer(presistAnimalConfig, animalReducer);
const presistedDetailsReducer = persistReducer(presistDetailConfig, detailReducer);
const presistedFavoriteReducer = persistReducer(presistHistoryConfig, favoriteReducer);
const presistedUserReducer = persistReducer(presistUserConfig, userReducer);
const presistedReviewReducer = persistReducer(presistReviewConfig, reviewReducer);
const presistedCalendarReducer = persistReducer(presistCalendarConfig, calendarReducer);

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    animals: presistedAnimalReducer,
    detail: presistedDetailsReducer,
    favorite: presistedFavoriteReducer,
    user: presistedUserReducer,
    review: presistedReviewReducer,
    calendar: presistedCalendarReducer
  },
});

export const persistor = persistStore(store);
