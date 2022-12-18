import React from 'react';
import { Box, Card, CardMedia, CardActionArea, CardContent, Typography } from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets'
import Heart from '@mui/icons-material/Favorite';
import Image1 from '../../assets/images/dog3.jpg';
import Image2 from '../../assets/images/dog2.jpg';


function PictureBanner() {
  return (
    <Box sx={styles.mainBox}>
        <Card sx={styles.photoCard}>
            <CardActionArea sx={styles.actionArea}>
                <CardMedia 
                    image={Image1}
                    sx={styles.media}
                />
            </CardActionArea>
            <CardContent sx={styles.content}>
                <Typography sx={styles.text}>
                    Hello! <PetsIcon sx={styles.icon} />
                </Typography>
            </CardContent>
        </Card>
        <Card sx={styles.photoCard}>
            <CardActionArea sx={styles.actionArea}>
                <CardMedia 
                    image={Image2}
                    sx={styles.media}
                />
            </CardActionArea>
            <CardContent sx={styles.content}>
                <Typography sx={styles.text}>
                    Remember that I love you <Heart sx={styles.icon}/>
                </Typography>

            </CardContent>
        </Card>
    </Box>
  )
}

export default PictureBanner;

const styles = {
    mainBox: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        height: '550px',
        marginTop: 10,
        marginBottom: 10,
        // border: '1px solid #676767',
    },
    photoCard: {
        // display: 'flex',
        // height: '550px',
        height: '100%',
        width: '30%',
        // marginTop: 10,
        // marginBottom: 10,
        borderRadius: 2,
        boxShadow: '10px 10px 30px rgba(0, 0, 0, 0.2);',
    },
    actionArea: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '90%',
        // border: '2px solid green',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    header: {
        textAlign: 'center',
    },
    content: {
        // display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    media: {
        height: '80%',
        width: '90%',
        // height: '300px',
    },
    icon: {
        fontSize: '1.5rem',
        color: '#676767',
        marginLeft: 1,
    },
    text: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
        fontSize: '1.3rem',
        fontFamily: 'Raleway',
    }
}