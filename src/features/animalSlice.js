import { createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';
import { data as allAnimals } from '../assets/dummyData/data'

//------------PULLING ALL ANIMALS FROM API------//

const initialState = {
  animalSelected: [],
  species: '',
  location: '',
  age: '',
  allAnimals,
  isLoading: true,
  apiAnimals: [],
}

export const animalSlice = createSlice({
  name: 'animals',
  initialState,
  reducers: {

    selectFilter(state, action) {
      // console.log('filter', action.payload)
      state.location = action.payload.location;
      state.age = action.payload.age;
      state.species = action.payload.species;
      if (state.age && state.location && state.species) {
        state.animalSelected = state.allAnimals.filter(x => x.age === state.age && x.location === state.location && x.species === state.species)
      } else if (!state.age && state.location && state.species) {
        state.animalSelected = state.allAnimals.filter(x => x.location === state.location && x.species === state.species)
      } else if (state.age && !state.location && state.species) {
        state.animalSelected = state.allAnimals.filter(x => x.age === state.age && x.species === state.species)
      } else if (state.age && state.location && !state.species) {
        state.animalSelected = state.allAnimals.filter(x => x.location === state.location && x.age === state.age)
      } else if (!state.age && !state.location && state.species) {
        state.animalSelected = state.allAnimals.filter(x => x.species === state.species)
      } else if (!state.age && state.location && !state.species) {
        state.animalSelected = state.allAnimals.filter(x => x.location === state.location)
      } else if (state.age && !state.location && !state.species) {
        state.animalSelected = state.allAnimals.filter(x => x.age === state.age)
      } else {
        state.animalSelected = allAnimals
      }
    },
    setAnimals(state, action) {
      // console.log('apiAnimal HIT!', action.payload)
      state.apiAnimals = action.payload;
    }
  }
})

export const { selectCategory } = animalSlice.actions

export default animalSlice.reducer;