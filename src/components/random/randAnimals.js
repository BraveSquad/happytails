import React from 'react'
import { useDispatch, useSelector }  from 'react-redux';
import { animalDetail } from '../../features/detailSlice';
import { Box, Typography, CardMedia, Card, Button } from '@mui/material';
import { IoPawSharp } from 'react-icons/io5';
import Image from '../../assets/images/paw.jpg';

function Random() {
    const dispatch = useDispatch();
    const animals = useSelector(state => state.animals.randomAnimals);
    // console.log('RANDOM ANIMALS', animals);

    function handleClick(animal){
        dispatch(animalDetail(animal))
    }

  return (
    <Box sx={styles.mainBox}>
        <Typography>Animals Nearby</Typography>
        <Box sx={styles.wrapperBox}>
            {animals.length > 0 && animals.map((animal, idx) => (
                <Box key={idx} variant='div' sx={styles.wrapper}>
                    <Card sx={styles.card}>
                        <Typography  sx={styles.text} >{animal.name}</Typography>
                        {animal.primary_photo_cropped === null ? (
                        <CardMedia image={Image} />
                        ) : (<CardMedia sx={styles.img} image={animal.primary_photo_cropped.medium} />)}
                        <Button sx={styles.button}href='/details' onClick={() => handleClick(animal)}><IoPawSharp sx={styles.icon}/></Button>
                    </Card>
                </Box>
            ))}
        </Box>
    </Box>
  )
}

export default Random;

const styles = {
    mainBox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        height: '400px',
        border: '1px solid black',
        marginTop: '50px',
        marginBottom: '50px'
    },
    wrapperBox: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
        borderRadius: 4,
        boxShadow: '10px 10px 30px rgba(0, 0, 0, 0.3)',
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
    button: {
        fontSize: '3rem',
        color: 'black'
        // color: '#70e1f5'
    },
    icon: {
        color: 'black'
    },
}