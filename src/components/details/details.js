import React from 'react'
import { Box, Button, Card, CardMedia, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';

import { useSelector } from 'react-redux';
import Header from '../header/header'
import Footer from '../footer/footer'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../../assets/style/detail.css'
import Chance from 'chance';
import Image from '../../assets/images/paw.jpg';
const chance = new Chance();

const styles = {
  media: {
    height: '200px',
    width: '200px',
  }
}

export default function Details() {

  const animal = useSelector(state => state.detail.animalDetail);

  return (
    <Box >
      <Header />
      <div id='MainDiv'>
        <Box key={animal.id} sx={{ fontSize: '60px' }}> {animal.name}</Box>
        <Box key={animal.id} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '50px', width: '600px' }}>
          <Card key={animal.id} sx={{ padding: '30px', borderRadius: '7px', display: 'flex', flexDirection: 'column', alignItems: 'center' }} elevation={5}>
            {/* <CardMedia image={animal.photos[0]} sx={{ height: '500px', width: '500px', borderRadius: '4px' }} />*/}
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
                Cost: ${animal.cost}
              </Typography>
              <>````````````````````````</>
            </div>

          </Card>
          <Button href={`/inquire`} sx={{ color: 'salmon', backgroundColor: 'lightgrey', marginTop: '20px' }} value={animal} >Inquire</Button>
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
              <Typography>
                {/* {chance.pickset(animal.tags,5)} */}
              </Typography>
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
      <Footer />
    </Box>
  )
}
