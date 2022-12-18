import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPets } from '../components/search/api';

export const getPetsThunk = createAsyncThunk('GET_PETS', async () => {
  // Call the getPets function here
  const pets = await getPets();
  return pets;
});
