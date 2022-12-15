import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Box, Button, Card, CardMedia, Typography } from '@mui/material';
import { animalDetail } from '../../features/detailSlice';
import axios from 'axios';
import Image from '../../assets/images/paw.jpg';
import '../../assets/style/favorites.css'

// import Chance from 'chance';
// const chance = new Chance();

export default function Favorite(props) {
  console.log('props in fav', props)
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorite.favoriteArray);
  // console.log('MY FAVORITE ANIMAL!!', favorites);

  function handleDetail(animal) {
    dispatch(animalDetail(animal))
    handlePostFav(animal)
  }




  let handlePostFav = async (animal) => {

    // if (props.auth0.isAuthenticated) {
    const res = await props.auth0.getIdTokenClaims();
    console.log('res', res)
    const jwt = res.__raw;

    const config = {
      headers: { Authorization: `Bearer ${jwt}` },
      method: 'POST',
      baseURL: `${process.env.REACT_APP_HEROKU_URL}`,
      url: '/user',
      data: animal
    };
    const rest = await axios(config);
    console.log('USER CONFIG', rest.data);
    // }
  };






  let favoritesArray = [];

  if (favorites.length > 0) {
    favoritesArray = favorites.map(animal => (
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '400px', marginBottom: 5 }}>
        <Card key={'key'} sx={{ padding: '30px', borderRadius: '7px', display: 'flex', flexDirection: 'column', alignItems: 'center' }} elevation={5}>
          {animal.primary_photo_cropped === null ? (
            <CardMedia image={Image} sx={styles.media} />
          ) : (<CardMedia image={animal.primary_photo_cropped.medium} sx={styles.media} />)}
          <div id='detailInfo'>
            <Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}>
              {animal.name}
            </Typography>
            <div id='line-2' >
              <hr />
            </div>
            <Typography >
            </Typography>
            <Button href='/details' onClick={() => handleDetail(animal)} sx={{ color: 'lightblue', marginBottom: -3 }}>Details</Button>
          </div>

        </Card>
      </Box>
    ))
  }
  return (
    <Box sx={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      // position: 'absolute',



    }}>
      <Typography sx={{ fontWeight: 'bold', fontSize: '40px', marginBottom: '10px' }}>My Favorites</Typography>
      {/* {animalArr > 0 ? chance.pickset(animalArr, 2) : ''} */}
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: '80%',
        overflowY: 'scroll',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        maxHeight: 700,
      }}>
        {favoritesArray}
      </Box>
    </Box >
  )
}

const styles = {
  media: {
    height: '200px',
    width: '200px',
    borderRadius: '4px'
  }
}
