import React from 'react'
import { Box, CardMedia } from '@mui/material';
import Dog from '../../assets/images/dog.png'

export default function Welcome() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '90px' }}>
      <Box sx={{ fontSize: '60px', marginTop: '15px', marginLeft: '40px' }}> Welcome to HappyTails</Box>
      <Box sx={{ height: '90vh', width: '40%', borderRadius: '4px' }}>
        <CardMedia image={Dog} sx={{ height: '100%', width: '90%', borderRadius: '4px' }} />
      </Box>
    </Box>
  )
}
