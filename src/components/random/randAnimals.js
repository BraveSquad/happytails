import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { animalDetail } from '../../features/detailSlice';
import { getRandom } from '../../features/animalSlice';
import { Box, Typography, CardMedia, Card, Button } from '@mui/material';
import { IoPawSharp } from 'react-icons/io5';
import ForwardIcon from '@mui/icons-material/Forward';
import Cat from '../../assets/images/catlogo.png';
import Dog from '../../assets/images/doglogo.jpg';
import Hat from '../../assets/images/dogHat.png';

function Random() {
    const dispatch = useDispatch();
    const animals = useSelector(state => state.animals.randomAnimals);

    function handleClick(animal) {
        dispatch(animalDetail(animal))
    }

    function handleShuffle() {
        dispatch(getRandom());
    }

    return (
        <Box sx={styles.mainBox}>
            <Box sx={styles.boxShuffle}>
                <Typography sx={styles.textShuffle}>Shuffle <ForwardIcon sx={styles.iconForward} /></Typography>
                <Button sx={styles.buttonShuffle} onClick={handleShuffle}>
                    <Box component='img' sx={styles.imageShuffleIcon} />
                </Button>
            </Box>
            <Box sx={styles.wrapperBox}>
                {animals.length > 0 && animals.map((animal, idx) => (
                    <Box key={idx} variant='div' sx={styles.wrapper}>
                        <Card sx={styles.card}>
                            <Typography sx={styles.textName}>{animal.name}</Typography>
                            {animal.primary_photo_cropped === null && animal.type === 'Dog' ? (
                                <CardMedia sx={styles.imageAnimalCard} image={Dog} />
                            ) : (
                                animal.primary_photo_cropped === null && animal.type === 'Cat' ? (
                                    <CardMedia sx={styles.imageAnimalCard} image={Cat} />
                                ) : (
                                    <CardMedia sx={styles.imageAnimalCard} image={animal.primary_photo_cropped.medium} />
                                )
                            )}
                            <Button sx={styles.buttonDetails} href='/details' onClick={() => handleClick(animal)}>
                                <IoPawSharp sx={styles.iconPaw} />
                            </Button>
                        </Card>
                    </Box>
                ))}
            </Box>
            <Box sx={styles.boxTextTitle}>
                <Typography sx={styles.textTitle}>Animals Nearby</Typography>
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
        marginTop: 10,
        marginBottom: 7,
        // border: '1px solid black',
    },
    wrapperBox: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 3,
        marginTop: 5,
        paddingTop: 5,
        paddingBottom: 5,
        // border: '1px solid black',
    },
    boxShuffle: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '25%',
        marginTop: 3,
        marginBottom: 3,
        // border: '1px solid red',
    },
    boxTextTitle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '200px',
        // border: '1px solid green',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
        borderRadius: 4,
        boxShadow: '10px 10px 30px rgba(0, 0, 0, 0.3)',
        minWidth: '240px',
    },
    imageAnimalCard: {
        width: '13rem',
        height: '13rem',
        borderRadius: '50%',
        // backgroundColor: 'red',
        // border: '10px solid grey',
        boxShadow: '10px 10px 30px rgba(0, 0, 0, 0.3)',
    },
    imageShuffleIcon: {
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        backgroundImage: `url(${Hat})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        boxShadow: '10px 10px 30px rgba(0, 0, 0, 0.3)',
        // border: '5px solid green',
    },
    textName: {
        textAlign: 'center',
        fontSize: '1.1rem',
        fontFamily: 'Raleway',
        fontWeight: 'bold',
        marginBottom: 1,
        // border: '1px solid black',
    },
    textShuffle: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: '2rem',
        fontFamily: 'Raleway',
        width: '40%',
        borderRadius: '2rem',
        border: '1px solid black',
        maxWidth: '190px',
    },
    textTitle: {
        textAlign: 'center',
        fontSize: '3rem',
        fontFamily: 'Raleway',
        fontWeight: 'bold',
        marginBottom: 1,
    },
    buttonDetails: {
        fontSize: '3rem',
        color: 'black',
        marginTop: 1.2,
        transition: 'transform .4s',
        '&:hover': {
            color: '#70e1f5',
            transform: 'scale(1.1)',
        },
    },
    buttonShuffle: {
        height: '170px',
        width: '170px',
        borderRadius: '50%',
        backgroundColor: '#fcae1c',
        transition: 'transform  0.1s',
        // backgroundColor: 'red',
        // border: '1px solid white',
        '&:hover': {
            animation: 'wiggle 0.5s infinite',
            backgroundColor: '#70e1f5',
            borderRadius: '50%',
            boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
        },
        '&:hover:active': {
            transform: 'translateX(3px)',
        },
        '@keyframes wiggle': {
            '0%': {
                transform: 'rotate(0deg)',
            },
            '50%': {
                transform: 'rotate(-5deg)'
            },
            '100%': {
                transform: 'rotate(0deg)'
            }
        }
    },
    iconForward: {
        fontSize: '3rem',
    }
}