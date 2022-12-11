import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { cartSlice } from '../../features/cartSlice'
import { Box, Button, Card, CardMedia, Stack, Typography } from '@mui/material';
// import { animalSlice } from '../../features/animalSlice';

//------------ INLINE STYLING ----------------//

const styles = {
  mainBox: {
    background: 'rgba(210, 210, 210, 0.777)',
    // background: 'red',
    borderRadius: '7px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', padding: '20px'
  },
  box: {
    padding: '20px'
  },
  card: {
    margin: '20px',
    padding: '20px', borderRadius: '7px', display: 'flex', alignItems: 'center', justifyContent: 'center',
    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgb(60, 201, 226,0.39) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;',

  }
}


export default function Animals() {
  const dispatch = useDispatch();

  function handleAddToCart(data) {
    console.log('ADD_TO_CART', data)
    dispatch(cartSlice.actions.addToCart(data))
  }


  const animals = useSelector(state => state.animals.animalSelected);
  console.log('animals from slice', animals)
  let animalArr = [];

  if (animals.length > 0) {
    animalArr = animals.map(animal => (
      <Card key={animal.id} sx={styles.card}>
        <CardMedia image={animal.photos[0]} sx={{ height: '180px', width: '180px', borderRadius: '4px' }} />
        <Box sx={styles.box}>
          <Typography>
            {animal.name}
          </Typography>
          <hr />
          <Typography>
            Breed: {animal.breed}
          </Typography>
          <Typography>
            Cost: {animal.cost}
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button sx={{ color: 'salmon' }} value={animal} onClick={() => handleAddToCart(animal)}>Add to Cart</Button>
            <Button sx={{ color: 'lightblue' }}>Details</Button>
          </Stack>
        </Box>


      </Card>
    ))
  }

  return (
    <Box sx={styles.mainBox}>
      {animalArr}
    </Box>
  )
}
