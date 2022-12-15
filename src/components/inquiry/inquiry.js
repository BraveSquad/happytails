import * as React from "react";
import { useSelector } from "react-redux";
import Form from '../form/form';
import { Box, Card, CardMedia, Typography, CardActionArea, Grid, TextField, CardContent, Button } from "@mui/material";
import Image from '../../assets/images/paw.jpg';

export default function Inquiry() {

  const animal = useSelector(state => state.detail.animalDetail);

  return (
    <Box variant='div' sx={styles.mainBox}>
      <Grid>
        <Typography variant="h3" align="center" fontWeight="bold" style={{marginBottom: '20px'}}>
          {animal.name}
        </Typography>
        <Grid container spacing={1} sx={styles.card} justify-content="center" >
          <Grid item xs={0}>
            <Card sx={styles.imageContainer}>
              <CardActionArea>
              {animal.primary_photo_cropped === null ? (
              <CardMedia image={Image} sx={styles.cardStyle} />
              ) : (<CardMedia image={animal.primary_photo_cropped.medium} sx={styles.cardStyle} />)}
              </CardActionArea>
            </Card>
            <Card sx={{ borderRadius: 7, marginTop: 3 }} >
              <CardContent >
                <Grid container spacing={1} >
                  <Grid item xs={6}>
                    <Typography component="span" sx={styles.position2}>Breed </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography sx={styles.position} >{animal.breeds.primary}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography component="span" sx={styles.position2}>Age </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography sx={styles.position} >{animal.age}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography component="span" sx={styles.position2}>Color </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography sx={styles.position}>{animal.colors.primary ? animal.colors.primary : 'n/a'}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography component="span" sx={styles.position2}>Sex </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography sx={styles.position} >{animal.gender}</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid >
        <Card sx={styles.grid}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Contact Us
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
              Fill up the form and our team will get back to you within 24 hours.
            </Typography>
            <Form />
          </CardContent>
        </Card>
      </Grid>
    </Box>
  );
}

const styles = {
  mainBox: {
    display: 'flex', 
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 5,
    marginBottom: '40px',
  },
  card: {
    borderRadius: '7px', alignItems: 'center', display: "flex", justifyContent: "center",
    // boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgb(60, 201, 226,0.39) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;',
  },
  grid: {
    // boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgb(60, 201, 226,0.39) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;',
    boxShadow: '10px 10px 30px rgba(0, 0, 0, 0.2);',
    maxWidth: 450, 
    padding: "20px 5px", 
    margin: "30px auto" 
  },
  position: {
    float: "right",
    fontSize: 20,
    fontWeight: 540
  },
  position2: {
    fontSize: 20,
    fontWeight: 600,
  },
  cardStyle: {
    height: '600px',
    width: '100%',
    borderRadius: '4px',
    justifyContent: 'center',
    alignItems: 'center',
    // border: '3px solid black',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  }
}
