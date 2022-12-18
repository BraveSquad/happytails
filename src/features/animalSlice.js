import { createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { data as allAnimals } from '../assets/dummyData/data'

//------------PULLING ALL ANIMALS FROM API------//

const initialState = {
  apiAnimals: [],
}

export const animalSlice = createSlice({
  name: 'animals',
  initialState,
  reducers: {


    setAnimals(state, action) {
      // console.log('apiAnimal HIT!', action.payload)
      state.apiAnimals = action.payload;
    }
  }
})


export default animalSlice.reducer;