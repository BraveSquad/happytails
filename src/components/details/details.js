import React from 'react'
import { Box, Button, Card, CardMedia, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { addToFavorites } from '../../features/favoriteSlice';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../../assets/style/detail.css'
import Image from '../../assets/images/paw.jpg';



export default function Details(props) {
  const dispatch = useDispatch();
  const animal = useSelector(state => state.detail.animalDetail);
  const favorites = useSelector(state => state.favorite.favoriteArray);
  console.log('CURRENT DETAIL', animal);
  console.log('CURRENT FAV', favorites);

  function handleAddToFavorites(animal) {

    dispatch(addToFavorites(animal));

  };

  let handlePostFav = async () => {
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

    console.log('USER CONFIG', rest.data);
    // }
  };

  setTimeout(() => {

    handlePostFav()

  }, 5000)





  return (
    <Box sx={styles.mainBox}>
      <div id='MainDiv'>
        <Box key={animal.id} sx={{ fontSize: '60px' }}> {animal.name}</Box>
        <Box key={animal.id} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '50px', width: '600px' }}>
          <Card key={animal.id} sx={{ padding: '30px', borderRadius: '7px', display: 'flex', flexDirection: 'column', alignItems: 'center' }} elevation={5}>
            {animal.primary_photo_cropped === null ? (
              <CardMedia image={Image} sx={styles.media} />
            ) : (<CardMedia image={animal.primary_photo_cropped.medium} sx={styles.media} />)}
            <div id='detailInfo'>
              <Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}>
                {animal.species}
              </Typography>
              <div id='line-1' >
                <hr />
              </div>
              <Typography >
                Status: {animal.status}
              </Typography>
              <>````````````````````````</>
            </div>
            <Button sx={styles.favoriteButton} value={animal} onClick={() => handleAddToFavorites(animal)}>Favorite</Button>
          </Card>
          <Button href='/inquire' sx={{ color: 'salmon', backgroundColor: 'lightgrey', marginTop: '20px' }} value={animal} >Inquire</Button>
          <Typography variant="subtitle1" sx={{ fontSize: '40px', marginTop: '30px', display: 'flex', alignItems: "center", justifyContent: 'center' }}>
            Animal Details
          </Typography>
          <Accordion sx={{ borderRadius: '5px' }} >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ fontWeight: 'bold', fontSize: '15px' }}>Fun Facts </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {animal.tags.length === 0 ? (
                <Typography>
                  Ready to take home!
                </Typography>

              ) : (
                <Typography>
                  {/* {chance.pickset(animal.tags, 3)} */}
                  {animal.tags.map(x => <Typography>
                    - {x}
                  </Typography>)}
                </Typography>
              )}

            </AccordionDetails>
          </Accordion>
          <Accordion elevation={5} sx={{ borderRadius: '5px' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography sx={{ fontWeight: 'bold', fontSize: '15px' }}>Description</Typography>
            </AccordionSummary>
            <AccordionDetails >

              <Typography id='history' >
                <p id='description'>{animal.description}</p>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box >
      </div>
    </Box>
  )
}

const styles = {
  mainBox: {
    width: '100%'
  },
  media: {
    height: '400px',
    width: '400px',
  },

  favoriteButton: {
    color: '#3b3b3b', "& button:focus": { color: "#3b3b3b" },
    "& button:active": { color: "black" }, "&:hover ": {
      "background-color": 'lightgrey', color: 'white'
    },
  }

}