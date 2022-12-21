import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLocation, setBreed, setType, setAge } from '../../features/animalSlice';
import { Box, InputLabel, MenuItem, FormControl, Select, Button, TextField } from '@mui/material';
import Image from '../../assets/images/animalBanner.jpg';
import { GetPets } from './api';


function Search() {
  const dispatch = useDispatch();
  const search = useSelector(state => state.animals.params);
  // console.log('Search: ', search);

  const params = {
    type: search.type, 
    breed: search.breed, 
    age: search.age, 
    location: search.location, 
    limit: search.limit,
    page: search.page
  }

  const handleLocation = (event) => {
    dispatch(setLocation(event.target.value));
  };
  const handleAge = (event) => {
    dispatch(setAge(event.target.value));
  };
  const handleType = (event) => {
    dispatch(setType(event.target.value));
  };
  const handleBreed = (event) => {
    dispatch(setBreed(event.target.value));
  };

  const handleSearch = (e, params, dispatch) => {
    GetPets(params, dispatch);
  }

  return (
    <Box sx={styles.mainBox}>
      <Box sx={styles.wrapperBox}>
        <Box sx={styles.searchBox}>
          <FormControl sx={styles.formControl}>
            <InputLabel id="demo-simple-select-label" />
            <TextField id="outlined-basic" value={search.location} label="Zip Code" onChange={handleLocation} variant="outlined" />
          </FormControl>

          <FormControl sx={styles.formControl}>
            <InputLabel id="demo-simple-select-label" />
            <TextField id="outlined-basic" value={search.breed} label="Breed" onChange={handleBreed} variant="outlined" />
          </FormControl>

          <FormControl sx={styles.formControl}>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={search.age}
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
              value={search.type}
              name={search.type}
              label="species"
              onChange={handleType}
            >
              <MenuItem value={'Dog'}>Dog</MenuItem>
              <MenuItem value={'Cat'}>Cat</MenuItem>
            </Select>
          </FormControl>
          <Button href='/animals' sx={styles.searchButton} onClick={() => handleSearch(params, dispatch)}>Search</Button>
          {/* <Button href='/animals' sx={styles.searchButton} onClick={GetPets({ type: type, breed: breed, age: age, location: location, limit: limit, page: page}, dispatch)}>Search</Button> */}
          {/* <Button href='/animals' sx={styles.searchButton} onClick={GetPets({ type: search.type, breed: search.breed, age: search.age, location: search.location, limit: search.limit, page: search.page}, dispatch)}>Search</Button> */}

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
      backgroundColor: '#70E1F5',
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