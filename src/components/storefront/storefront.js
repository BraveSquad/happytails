import React from 'react'
import Box from '@mui/material/Box'
import Animals from './animals'
import Categories from './categories'
import '../../assets/style/storeFront.css'


export default function Storefront() {
  return (
    <Box className='storeFrontBox' sx={{ position: 'relative' }}>
      <Categories />
      <Animals />
    </Box>
  )
}
