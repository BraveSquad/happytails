import React from 'react'
import Box from '@mui/material/Box'
import Search from './search'

import '../../assets/style/storeFront.css'


export default function Storefront() {
  return (
    <Box className='storeFrontBox' sx={{ position: 'relative' }}>
      <Search />
    </Box>
  )
}
