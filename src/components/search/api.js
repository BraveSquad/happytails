import { Client } from '@petfinder/petfinder-js';
import { animalSlice } from '../../features/animalSlice';
// import { useSelector } from 'react-redux';

const client = new Client({
  apiKey: process.env.REACT_APP_API_KEY,
  secret: process.env.REACT_APP_SECRET_KEY,
});

export const GetPets = (search, dispatch) => async () => {
    try {
    const res = await client.animal.search({
      type: search.type,
      breed: search.breed,
      location: search.location,
      limit: search.limit,
      page: search.page,
    });
    dispatch(animalSlice.actions.setAnimals(res.data.animals));
    console.log('ANIMALS FROM  API CALL: ', res.data.animals);
  } catch (err) {
    console.error('Error getting pets:', err);
  }
};
