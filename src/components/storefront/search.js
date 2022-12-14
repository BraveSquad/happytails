import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { animalSlice } from '../../features/animalSlice'
import { Box, InputLabel, MenuItem, FormControl, Select, Button, TextField } from '@mui/material';
import { Client } from '@petfinder/petfinder-js';


function Search() {
  const dispatch = useDispatch();

  const [zipCode, setZipCode] = useState(98106);
  const [age, setAge] = useState('');
  const [token, setToken] = useState('');
  const [type, setType] = useState('');
  const [breed, setBreed] = useState('');
  const [limit, setLimit] = useState(50);
  const [page, setPage] = useState(1);
  const [animal, setAnimal] = useState([]);

  const handleZipCode = (event) => {
    setZipCode(event.target.value);

  };
  const handleAge = (event) => {
    setAge(event.target.value);

  };
  const handleType = (event) => {
    console.log('search called', event.target.value)
    setType(event.target.value);

  };
  const handleBreed = (event) => {
    console.log('breed from animal.js', event.target.value)
    setBreed(event.target.value);
  };

  const handleSearch = () => {
    getPets();
  }

  //build client object - setting the key, secret key and token. The token is needed to make api requests
  const client = new Client({ apiKey: process.env.REACT_APP_API_KEY, secret: process.env.REACT_APP_SECRET_KEY, token: token })
  console.log('client: ', client);

  function getPets() {
    // console.log('getPets called');
    client.animal.search({
      type: type,
      breed: breed,
      location: zipCode,
      limit: limit,
      page: page,
    })
      .then(res => {
        // dispatch(res.data.animal);
        console.log('GET_PETS res object: ', res.data.animals);
        dispatch(animalSlice.actions.setAnimals(res.data.animals));
        setAnimal(res.data.animals);
        console.log('animals', animal);
      })
      .catch(err => {
        console.log(err);
      });
  }

  useEffect(() => {
    client.authenticate()
      .then(res => {
        setToken(res.data.access_token);
      });
  }, []);

  return (

    <Box sx={{ minWidth: 120, display: 'flex', alignContent: "center", justifyContent: 'center', padding: 10 }}>
      <FormControl sx={{ width: 120 }}>
        <InputLabel id="demo-simple-select-label" />
        <TextField id="outlined-basic" value={zipCode} label="Zip Code" onChange={handleZipCode} variant="outlined" />
      </FormControl>

      <FormControl sx={{ width: 120 }}>
        <InputLabel id="demo-simple-select-label" />
        <TextField id="outlined-basic" value={breed} label="Breed" onChange={handleBreed} variant="outlined" />
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
          <MenuItem value={'Baby'}>Baby</MenuItem>
          <MenuItem value={'Young'}>Young</MenuItem>
          <MenuItem value={'Adult'}>Adult</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ width: 120 }}>
        <InputLabel id="demo-simple-select-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          label="species"
          onChange={handleType}
        >
          <MenuItem value={'Dog'}>Dog</MenuItem>
          <MenuItem value={'Cat'}>Cat</MenuItem>
        </Select>
      </FormControl>

      <Button href='/animals' onClick={() => handleSearch()}>Search</Button>
      {/* <Button onClick={() => getPets()}>Search</Button> */}
    </Box>

  )
}

export default Search;