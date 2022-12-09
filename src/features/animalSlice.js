import { createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';
import { data as allAnimals } from '../assets/dummyData/data'

  //------------PULLING ALL ANIMALS FROM API------//
  ;

const initialState = {
  animalDetail: [],
  animalSelected: [],
  species: '',
  allAnimals,
  isLoading: true,
}

export const animalSlice = createSlice({
  name: 'animals',
  initialState,
  reducers: {
    selectCategory(state, action) {
      console.log('action category', action.payload)
      state.species = action.payload;
      state.animalSelected = state.species === 'all' ? state.allAnimals : state.allAnimals.filter
        ((x) => x.species === state.species);
    },
  }
})

export const { selectCategory } = animalSlice.actions

export default animalSlice.reducer;