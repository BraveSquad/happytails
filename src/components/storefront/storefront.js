import React from 'react'
import Box from '@mui/material/Box'
import Animals from './animals'
import Categories from './categories'

export default function storefront() {
  return (
    <Box>
      <Animals />
      <Categories />
    </Box>
  )
}
