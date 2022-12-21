import { createAsyncThunk } from '@reduxjs/toolkit';
import { GetPets } from '../components/search/api';

export const getPetsThunk = createAsyncThunk('GET_PETS', async () => {
  // Call the getPets function here
  const pets = await GetPets();
  return pets;
});
