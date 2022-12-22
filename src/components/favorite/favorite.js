import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import { Box, Button, Card, CardMedia, Typography, Stack } from '@mui/material';
import LoadingSpinner from '../loading/loading';
import { animalDetail } from '../../features/detailSlice';
import { deleteFavorite } from '../../features/favoriteSlice';
import Image from '../../assets/images/paw.jpg';
import '../../assets/style/favorites.css'



export default function Favorite(props) {

  // console.log('USER FAVE PROPS', props)
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
      userName: props.user.userName || props.user.nickName,
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
    await axios(config);
    // console.log('Fav Updated!!', rest.data);
  };


  let favoritesArray = [];


  if (favorites !== undefined && favorites.length > 0) {
    favoritesArray = favorites.map((animal, idx) => (
      <Box key={idx} sx={styles.cardContainer}>
        <Card key={idx} sx={styles.card} elevation={5}>
          {animal.primary_photo_cropped === null ? (
            <CardMedia image={Image} sx={styles.cardMedia} />
          ) : (<CardMedia image={animal.primary_photo_cropped.medium} sx={styles.cardMedia} />)}
          <Box sx={styles.informationBox}>
            <Box sx={styles.nameBox}>
              <Typography sx={styles.textAnimalName}>
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
            <Stack direction='row' spacing={2}>
              <Button href='/details' onClick={() => handleDetail(animal)} sx={styles.buttonDetails}>Details</Button>
              <Button onClick={() => deleteReview(animal)} sx={styles.buttonRemove}>Remove</Button>
            </Stack>
          </Box>
        </Card>
      </Box>
    ))
  }
  return (
    <>
      {isLoading ? (
        // <div>...Loading</div>
        <LoadingSpinner />
      ) : (
        <Box sx={styles.favoritesBox}>
          {favoritesArray}
        </Box>
      )}
    </>
  )
}

const styles = {
  favoritesContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  favoritesBox: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '80%',
    overflowY: 'scroll',
    overflowX: 'hidden',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    'scrollbar-width': 'none',
    height: '700px',
    // border: '2px solid green',
  },
  favoritesText: {
    fontWeight: 'bold',
    fontSize: '40px',
    marginBottom: '10px'
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 1,
    marginBottom: 1,
    maxWidth: '500px',
    // backgroundColor: '#676767',
    // border: '1px solid black',
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 1,
    borderRadius: '7px',
    boxShadow: '10px 10px 30px rgba(0, 0, 0, 0.2);',
    width: '95%',
    // border: '2px solid green'
  },
  cardMedia: {
    height: '200px',
    width: '45%',
  },
  informationBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '200px',
    width: '50%',
    marginRight: 1.5,
    // border: '1px solid  black',
  },
  nameBox: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  lineBreak: {
    height: '2px',
    width: '100%',
    backgroundColor: '#676767',
    borderRadius: '20px'
  },
  textAnimalName: {
    textAlign: 'center',
    fontFamily: 'Raleway',
    fontWeight: 'bold',
    fontSize: '1.2rem'
  },
  buttonDetails: {
    color: 'lightblue',
    borderRadius: '10px',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
    '&:hover': {
      backgroundColor: '#70E1F5',
      color: 'white',
      boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
    },
  },
  buttonRemove: {
    color: 'red',
    borderRadius: '10px',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
    '&:hover': {
      backgroundColor: '	#FF0000',
      color: 'white',
      boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
    },
  },
}
