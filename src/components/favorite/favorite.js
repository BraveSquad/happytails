import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Box, Button, Card, CardMedia, Typography } from '@mui/material';
import { animalDetail } from '../../features/detailSlice';
import '../../assets/style/favorites.css'
import Chance from 'chance';
const chance = new Chance();



export default function Favorite() {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorite.favoriteArray)
console.log('MY FAVORITE ANIMAL!!', favorites)
  function handleDetail(animal) {
    dispatch(animalDetail(animal))
  }



  let animalArr = [];

  if (favorites.length > 0) {
    animalArr = favorites.map(animal => (
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '400px', marginBottom: 5 }}>
        <Card key={'key'} sx={{ padding: '30px', borderRadius: '7px', display: 'flex', flexDirection: 'column', alignItems: 'center' }} elevation={5}>
          <CardMedia image={animal.photos[0].medium} sx={{ height: '200px', width: '200px', borderRadius: '4px' }} />
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
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Typography sx={{ fontWeight: 'bold', fontSize: '40px' }}>My Favorites</Typography>
      {chance.pickset(animalArr, 3)}
    </Box>
  )
}
