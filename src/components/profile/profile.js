import React from 'react'
import { Box, Card, CardMedia, Typography } from '@mui/material';
import Header from '../header/header'
import Footer from '../footer/footer'
import dog from '../../assets/images/dog.png'
import Favorites from '../favorite/favorite';

export default function Profile() {


  let user = (
    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 10, paddingLeft: 10 }}>

      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '600px' }}>
        <Card key={'key'} sx={{ padding: '30px', borderRadius: '7px', display: 'flex', flexDirection: 'column', alignItems: 'center' }} elevation={5}>
          <CardMedia image={dog} sx={{ height: '500px', width: '500px', borderRadius: '4px' }} />
          <div id='detailInfo'>
            <Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}>
              blah
            </Typography>
            <div id='line-1' >
              <hr />

            </div>
            <Typography >
              Name: Danny
            </Typography>
            <Typography >
              Email: myTailWags@gmail.com
            </Typography>

          </div>

        </Card>
      </Box>

      <Box sx={{
        marginLeft: 40,
        height: '800px',
        width: '600px',
        borderRadius: '4px',
        padding: 2,
        boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgb(60, 201, 226,0.39) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;',

      }} >
        <Favorites />
      </Box>

    </ Box >
  )

  return (
    <Box>
      <Header />
      {user}
      <Footer />
    </Box>
  )

}
