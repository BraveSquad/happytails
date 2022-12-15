import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Card, CardMedia, Stack, Typography } from '@mui/material';
import { animalDetail } from '../../features/detailSlice';
import { addToFavorites } from '../../features/favoriteSlice';

// import { animalSlice } from '../../features/animalSlice';
import Image from '../../assets/images/paw.jpg';

export default function Animals() {
  const dispatch = useDispatch();

  // const favorites = useSelector(state => state.favorite.favoriteArray);
  // add animal to favorite's array
  function handleAddToFavorites(animal){
    dispatch(addToFavorites(animal));
  };

  // add selected animal to favorite object
  function handleDetail(animal) {
    dispatch(animalDetail(animal))
  };


  const animals = useSelector(state => state.animals.apiAnimals);
  let animalArr = [];

  if (animals.length > 0) {
    animalArr = animals.map(animal => (
      <Card key={animal.id} sx={styles.card}>
       {animal.primary_photo_cropped === null ? (
          <CardMedia image={Image} sx={styles.media} />
        ) : (<CardMedia image={animal.primary_photo_cropped.medium} sx={styles.media} />)}
        <Box sx={styles.informationBox}>
          <Box sx={styles.nameBox}>
            <Typography sx={styles.textName}>
              {animal.name}
            <Box sx={styles.lineBreak} />
          </Typography>
          </Box>
          <Typography sx={styles.textBreed}>
            {animal.breeds.primary}
          </Typography>
          <Typography sx={styles.textGender}>
           {animal.gender}
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button sx={styles.favoriteButton} value={animal} onClick={() => handleAddToFavorites(animal)}>Favorite</Button>
            <Button sx={styles.detailsButton} href='/details' onClick={() => handleDetail(animal)}>Details</Button>
          </Stack>
          {/* {favorites.map(x => { return x === animal ? <h4>Added to Favorites</h4> : ''})} */}
        </Box>
      </Card>
    ))
  }

  return (
    <Box sx={styles.mainBox}>
      <Typography sx={styles.titleText}>
        Browse our Animals
      </Typography>
      <Box sx={styles.animalCardWrapperBox}>
        {animalArr}
      </Box>
    </Box>
  )
}

const styles = {
  mainBox: {
    display: 'flex',
    flexDirection: 'column',  
    alignItems: 'center', 
    justifyContent: 'center',
    width: '100%' 
  },
  animalCardWrapperBox: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
  },
  titleText: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Raleway',
    fontWeight: 'bold',
    fontSize: '3rem'
  },
  card: {
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'space-between',
    margin: '20px',
    padding: '15px', 
    borderRadius: '7px', 
    boxShadow: '10px 10px 30px rgba(0, 0, 0, 0.2);',
    maxWidth: '20%',
    minWidth: '400px',
  },
  media: {
    height: '200px', 
    minWidth: '200px', 
    borderRadius: '4px', 
  },
  informationBox: {
    display: 'flex',
    flexDirection:  'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '200px',
    width: '45%',
    // border: '2px solid red',
  },
  lineBreak: {
    height: '2px',
    width: '90%',
    backgroundColor: '#676767',
    borderRadius: '20px'
  },
  nameBox: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  textName: {
    textAlign: 'center',
    fontFamily: 'Raleway',
    fontWeight: 'bold',
    fontSize: '1.2rem'
  },
  textBreed: {
    textAlign: 'center',
    fontFamily: 'Raleway',
    fontWeight: 'bold',
  },
  textGender: {
    textAlign: 'center',
    // fontWeight: 'bold',
  },
  favoriteButton: {
    backgroundColor: '#676767',
    color: 'white',
    borderRadius: '10px',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
    '&:hover': {
      backgroundColor: '	#FF0000',
      // color: 'black',
      boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
    },
  },
  detailsButton: {
    // border: '1px solid black',
    backgroundColor: '#1ee8c0',
    color: 'white',
    borderRadius: '10px',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
    '&:hover': {
      boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
      color: 'black',
    }
  },
}
