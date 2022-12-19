import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import { Box, Button, Card, CardMedia, Typography } from '@mui/material';
import { animalDetail } from '../../features/detailSlice';
import { deleteFavorite } from '../../features/favoriteSlice';
import Image from '../../assets/images/paw.jpg';
import '../../assets/style/favorites.css'



export default function Favorite(props) {

  console.log('USER FAVE PROPS', props)
  const { isLoading } = props.user
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorite.favoriteArray);


  function handleDetail(animal) {
    dispatch(animalDetail(animal))
  }

  const deleteReview = (animal) => {
    dispatch(deleteFavorite(animal))
  }

  setTimeout(() => {
    handleDeleteFavorite()
  }, 2000)


  let handleDeleteFavorite = async () => {
    const res = await props.auth0.getIdTokenClaims();
    const jwt = res.__raw;
    const updatedUser = {
      _id: props.user._id,
      userName: props.user.userName,
      email: props.user.email,
      picture: props.user.picture,
      favorite: favorites,
      isLoading: props.auth0.isLoading
    }
    const config = {
      headers: { Authorization: `Bearer ${jwt}` },
      method: 'PUT',
      baseURL: `${process.env.REACT_APP_HEROKU_URL}`,
      url: `/fav/${updatedUser._id}`,
      data: updatedUser
    };
    const rest = await axios(config);
    console.log('Fav Updated!!', rest.data);
  };


  let favoritesArray = [];


  if (favorites !== undefined && favorites.length > 0) {
    favoritesArray = favorites.map((animal, idx) => (
      <Box key={idx} sx={styles.CardContainer}>
        <Card key={idx} sx={styles.card} elevation={5}>
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
            <Box sx={styles.buttons}>
              <Button href='/details' onClick={() => handleDetail(animal)} sx={{ color: 'lightblue', marginRight: 1 }}>Details</Button>
              <Button sx={{ color: 'salmon', marginLeft: 1 }} onClick={() => deleteReview(animal)}>Remove</Button>
            </Box>
          </div>
        </Card>
      </Box>
    ))
  }
  return (
    <>
      {isLoading ? (
        <div>...Loading</div>
      ) : (
        <Box sx={styles.favoritesContainer}>
          <Typography sx={styles.favoritesText}>My Favorites</Typography>
          <Box sx={styles.favoritesBox}>
            {favoritesArray}
          </Box>
        </Box >
      )}
    </>
  )
}

const styles = {
  favoritesContainer: {
    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
  },
  media: {
    height: '200px',
    width: '200px',
    borderRadius: '4px'
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },
  favoritesBox: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '80%',
    overflowY: 'scroll',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
    maxHeight: 700,
  },
  favoritesText: {
    fontWeight: 'bold',
    fontSize: '40px',
    marginBottom: '10px'
  },
  CardContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '400px',
    marginBottom: 5
  },
  card: {
    padding: '30px',
    borderRadius: '7px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}
