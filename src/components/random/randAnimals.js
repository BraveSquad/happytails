import React from 'react'
import { useDispatch, useSelector }  from 'react-redux';
import { animalDetail } from '../../features/detailSlice';
import { Box, Typography, CardMedia, Card, Button } from '@mui/material';

function Random() {
    const dispatch = useDispatch();
    const animals = useSelector(state => state.animals.randomAnimals);
    console.log('RANDOM ANIMALS', animals);

    function handleClick(animal){
        dispatch(animalDetail(animal))
    }

  return (
    <Box sx={styles.mainBox}>
        {animals.map(animal => (
            <Box variant='div' sx={styles.wrapper}>
                <Card sx={styles.card}>
                    <Typography  sx={styles.text} key={animal.id}>{animal.name}</Typography>
                    <CardMedia sx={styles.img} image={animal.primary_photo_cropped.medium}/>
                    <Button href='/details' onClick={() => handleClick(animal)}>Details</Button>
                </Card>
            </Box>
        ))}
    </Box>
  )
}

export default Random;

const styles = {
    mainBox: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        height: '400px',
        border: '1px solid black',
    },
    wrapper: {

    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: '10rem',
        height: '10rem',
        borderRadius: '50%',
        boxShadow: '10px 10px 30px rgba(0, 0, 0, 0.3)',
    },
    text: {
        textAlign: 'center',
    },
}