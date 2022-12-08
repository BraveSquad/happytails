import { createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

//------------PULLING ALL ANIMALS FROM API------
;

const initialState = {
  animalDetail: [],
  animalSelected: [],
  category: '',
  allProducts: [],
  isLoading: true,
}

export const animalSlice = createSlice({
  name: 'animals',
  initialState,
  reducers: {

  }
})