import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { animalSlice } from '../../features/animalSlice'
import { Box, InputLabel, MenuItem, FormControl, Select, Button, TextField } from '@mui/material';
import Image from '../../assets/images/animalBanner.jpg';
import { Client } from '@petfinder/petfinder-js';


function Search() {
  const dispatch = useDispatch();

  const [zipCode, setZipCode] = useState();
  const [age, setAge] = useState('');
  const [token, setToken] = useState('');
  const [type, setType] = useState('');
  const [breed, setBreed] = useState('');
  const [limit, setLimit] = useState(100);
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

    <Box sx={styles.mainBox}>
      <Box sx={styles.wrapperBox}>
        <Box sx={styles.searchBox}>
          <FormControl sx={styles.formControl}>
            <InputLabel id="demo-simple-select-label" />
            <TextField id="outlined-basic" value={zipCode} label="Zip Code" onChange={handleZipCode} variant="outlined" />
          </FormControl>

          <FormControl sx={styles.formControl}>
            <InputLabel id="demo-simple-select-label" />
            <TextField id="outlined-basic" value={breed} label="Breed" onChange={handleBreed} variant="outlined" />
          </FormControl>

          <FormControl sx={styles.formControl}>
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

          <FormControl sx={styles.formControl}>
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
          {/* TODO: need to fix routing after getPets() is selected - if we change pages too quickly, all animals will not get loaded from the API call */}
          <Button sx={styles.searchButton} onClick={() => handleSearch()}>Search</Button>
        </Box>
      </Box>
      <Box sx={styles.lineBreak} />
    </Box>
  )
}

export default Search;

const styles = {
  mainBox: {
    width: '100%',
    height: '400px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 10,
    backgroundImage: `url(${Image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginBottom: 3,
    // border: '3px solid red'
  },
  wrapperBox: {
    height: '100%',
  },
  searchBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    border: '1px solid lightgrey',
    padding: '10px',
    borderRadius: '15px',
  },
  searchButton: {
    backgroundColor: '#676767',
    color: 'white',
    marginLeft: '10px',
    '&:hover': {
      backgroundColor: '#1ee8c0',
      color: 'black',
      boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
    },
  },
  formControl: {
    width: '120px',
  },
  lineBreak: {
    height: '8px',
    width: '100%',
    backgroundColor: '#676767',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
  }
}