import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { animalSlice } from '../../features/animalSlice'
import { Box, InputLabel, MenuItem, FormControl, Select, Button } from '@mui/material';




function Categories() {
  const dispatch = useDispatch();

  const [location, setLocation] = useState('');
  const [age, setAge] = useState('');
  const [species, setSpecies] = useState('');

  const handleLocation = (event) => {
    setLocation(event.target.value);

  };
  const handleAge = (event) => {
    setAge(event.target.value);

  };
  const handleSpecies = (event) => {
    console.log('search called', event.target.value)
    setSpecies(event.target.value);

  };



  const handleSearch = () => {
    let obj = {
      location: location,
      age: age,
      species: species
    }
    dispatch(animalSlice.actions.selectFilter(obj))

  }


  return (

    <Box sx={{ minWidth: 120, display: 'flex', alignContent: "center", justifyContent: 'center', padding: 10 }}>
      <FormControl sx={{ width: 120 }}>
        <InputLabel id="demo-simple-select-label">Location</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={location}
          label="Location"
          onChange={handleLocation}
        >
          <MenuItem value={'Seattle'}>Seattle</MenuItem>
          <MenuItem value={'California'}>California</MenuItem>
          <MenuItem value={'Florida'}>Florida</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ width: 120 }}>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleAge}
        >
          <MenuItem value={'puppy'}>Puppy</MenuItem>
          <MenuItem value={'kitten'}>Kitten</MenuItem>
          <MenuItem value={'adult'}>Adult</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ width: 120 }}>
        <InputLabel id="demo-simple-select-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={species}
          label="species"
          onChange={handleSpecies}
        >
          <MenuItem value={'dog'}>Dog</MenuItem>
          <MenuItem value={'cat'}>Cat</MenuItem>
        </Select>
      </FormControl>
      <Button href='/animals' onClick={handleSearch} >Search</Button>
    </Box>

  )
}

export default Categories;