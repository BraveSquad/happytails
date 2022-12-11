import React from 'react'
import { Box, Button, Card, CardMedia, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';

import { useSelector } from 'react-redux';
import Header from '../header/header'
import Footer from '../footer/footer'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../../assets/style/detail.css'




export default function Details() {

  const selectedAnimal = useSelector(state => state.detail.animalDetail)
  console.log('IS THERE AN ANIMAL IN HERE??', selectedAnimal)


  let results = [];
  if (selectedAnimal.length > 0) {
    results = selectedAnimal.map(animal => (
      <div id='MainDiv'>

        <Box key={animal.id} sx={{ fontSize: '60px' }}> {animal.name}</Box>
        <Box key={animal.id} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '50px', width: '600px' }}>
          <Card key={animal.id} sx={{ padding: '30px', borderRadius: '7px', display: 'flex', flexDirection: 'column', alignItems: 'center' }} elevation={5}>
            <CardMedia image={animal.photos[0]} sx={{ height: '500px', width: '500px', borderRadius: '4px' }} />
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
              <Typography sx={{ fontWeight: 'bold', fontSize: '15px' }}>Fun Facts</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {animal.description}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion elevation={5} sx={{ borderRadius: '5px' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography sx={{ fontWeight: 'bold', fontSize: '15px' }}>History</Typography>
            </AccordionSummary>
            <AccordionDetails >

              <Typography id='history' >
                <p >History:</p>  <p id='stockText'>{animal.history}</p>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box >
      </div>
    ))
  }

  return (
    <Box >
      <Header />
      {results}
      <Footer />
    </Box>
  )
}
