import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Box, Button, Card, CardMedia, Typography } from '@mui/material';
import { animalDetail } from '../../features/detailSlice';
import Image from '../../assets/images/paw.jpg';
import '../../assets/style/favorites.css'

// import Chance from 'chance';
// const chance = new Chance();

export default function Favorite(props) {
  const [favMongo, setFavMongo] = useState([]);
  // const [blocked, setBlocked] = useState(false);
  console.log('USER FAVE PROPS', props)
  const { isLoading } = props.user
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorite.favoriteArray);

  //
  // console.log('MODGO FAVS', props.user.favorite)

  // useEffect(() => {
  //   setTimeout(() => {

  //     handlegetFavorites()
  //   }, 3000)
  // }, [favMongo])

  // function handlegetFavorites() {
  //   // if (isLoading) {
  //   //   <div>...Loading from Favs</div>
  //   // } else {
  //   setFavMongo(props.user.favorite)
  //   // }
  // }
  console.log('faveMongo', favMongo)

  function handleDetail(animal) {
    dispatch(animalDetail(animal))
  }





  let favoritesArray = [];


  if (favorites !== undefined && favorites.length > 0) {
    favoritesArray = favorites.map((animal, idx) => (
      <Box key={idx} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '400px', marginBottom: 5 }}>
        <Card key={idx} sx={{ padding: '30px', borderRadius: '7px', display: 'flex', flexDirection: 'column', alignItems: 'center' }} elevation={5}>
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
    <>
      {isLoading ? (
        <div>...Loading</div>
      ) : (


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
      )}
    </>
  )
}

const styles = {
  media: {
    height: '200px',
    width: '200px',
    borderRadius: '4px'
  }
}
