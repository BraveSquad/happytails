import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Box, Link } from '@mui/material';


export default function Footer() {
  return (
    <Box elevation={5} sx={{ display: 'flex', justifyContent: 'space-between', padding: 5, borderRadius: 3 }}>
      <Box >
        &copy; Happy Tails 2022
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', }}>
        <Link sx={{ paddingRight: 3 }} href="https://www.facebook.com/" target="_blank"> <FaFacebook /></Link>
        <Link sx={{ paddingRight: 3 }} href="https://www.instagram.com" target="_blank"> <FaInstagram /></Link>
        <Link sx={{ paddingRight: 3 }} href="https://www.twitter.com" target="_blank"> <FaTwitter /></Link>
        <Link sx={{ paddingRight: 3 }} href="https://www.linkedIn.com" target="_blank"> <FaLinkedin /></Link>
      </Box>

    </Box>
  )
}
