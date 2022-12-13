import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Card, CardMedia, Stack, Typography } from '@mui/material';
import { animalDetail } from '../../features/detailSlice';
import { addToFavorites } from '../../features/favoriteSlice';
import Search from './search'
import Header from '../header/header'
import Footer from '../footer/footer'
// import { animalSlice } from '../../features/animalSlice';

//------------ INLINE STYLING ----------------//

const styles = {
  mainBox: {
    // background: 'rgba(210, 210, 210, 0.777)',
    // background: 'red',

    borderRadius: '7px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', padding: '20px',
    height: '50vh'
  },
  box: {
    padding: '20px'
  },
  card: {
    margin: '20px',
    padding: '20px', borderRadius: '7px', display: 'flex', alignItems: 'center', justifyContent: 'center',
    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgb(60, 201, 226,0.39) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;',

  },
  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}


export default function Animals() {
  const dispatch = useDispatch();

// add animal to favorite's array
  function handleAddToFavorites(animal){
    dispatch(addToFavorites(animal));
  };

  function handleDetail(animal) {
    dispatch(animalDetail(animal))
  };

  const animals = useSelector(state => state.animals.apiAnimals);
  // console.log('api animals from slice', animals);
  let animalArr = [];

  if (animals.length > 0) {
    animalArr = animals.map(animal => (
      <Card key={animal.id} sx={styles.card}>
        <CardMedia image={animal.photos[0].medium} sx={{ height: '180px', width: '180px', borderRadius: '4px' }} />
        <Box sx={styles.box}>
          <Typography>
            {animal.name}
          </Typography>
          <hr />
          <Typography>
            Breed: {animal.breeds.primary}
          </Typography>
          <Typography>
           Gender: {animal.gender}
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button sx={{ color: 'salmon' }} value={animal} onClick={() => handleAddToFavorites(animal)}>Add to Favorites</Button>
            <Button href='/details' onClick={() => handleDetail(animal)} sx={{ color: 'lightblue' }}>Details</Button>
          </Stack>
        </Box>


      </Card>
    ))
  }

  return (
    <Box>
      <Header />
      <Search />
      <Typography sx={styles.title} variant="h2"> Browse our Animals</Typography>
      <Box sx={styles.mainBox}>
        {animalArr}
      </Box>
      <Footer />
    </Box>
  )
}
