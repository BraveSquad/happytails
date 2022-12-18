import { createSlice } from '@reduxjs/toolkit';
import { getPetsThunk } from './thunk';
import { data as allAnimals } from '../assets/dummyData/data'

//------------PULLING ALL ANIMALS FROM API------//

const initialState = {
  animalSelected: [],
  randomAnimals: [],
  species: '',
  location: '',
  // age: '',
  allAnimals,
  isLoading: true,
  apiAnimals: [],
  params: {
    type: '',
    breed: '',
    age: '',
    location: 98106,
    limit: 50,
    page: 1,
  },
  token: '',
  loading: false,
  error: null,
}

export const animalSlice = createSlice({
  name: 'animals',
  initialState,
  reducers: {
    setAnimals(state, action) {
      state.apiAnimals = action.payload;
      state.randomAnimals = state.apiAnimals.slice().sort(() => 0.5 - Math.random()).slice(0,5);
    },
    setType(state, action){
      state.params.type = action.payload;
    },
    setBreed(state, action){
      state.params.breed = action.payload;
    },
    setLocation(state,  action){
      state.params.location = action.payload;
    },
    setLimit(state, action){
      state.params.limit = action.payload;
    },
    setPage(state, action){
      state.params.page = action.payload;
    },
    setAge(state, action){
      state.params.age = action.payload;
    },
  },
  extraReducers: {
    [getPetsThunk.pending]: (state) => {
      state.loading = true;
    },
    [getPetsThunk.fulfilled]: (state, action) => {
      state.apiAnimals = action.payload;
      state.loading = false;
      state.error = null;
    },
    [getPetsThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
})

export const { selectCategory, setAnimals, setBreed, setType, setLocation, setLimit, setPage, setAge } = animalSlice.actions

export default animalSlice.reducer;