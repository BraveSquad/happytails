import React, { useState } from 'react'
import Link from '@mui/material/Link';
import { Box, Popper, Button } from '@mui/material';
import '../../assets/style/header.css'
import MenuIcon from '@mui/icons-material/Menu';


export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  //--------CLEARING OUT LOCALHOST FOR DETAILS PAGE -------------//
  const clearLocal = (e) => {
    localStorage.removeItem('persist:details');
  }

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <Box className='headerBox' maxWidth='l' sx={{ p: 2, borderRadius: '7px ' }}>
      <Link fontSize={'40px'} href="/" underline="hover" sx={{ color: 'grey' }} onClick={clearLocal} >
        HappyTails
      </Link>

      <Button sx={{ width: '3%' }} aria-describedby={id} type="button" onClick={handleClick}>
        <MenuIcon />
      </Button>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{
          p: 1, bgcolor: 'background.paper', padding: 3, marginRight: 5, borderRadius: '10px', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgb(60, 201, 226,0.39) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;',
        }} >
          <Link href="/profile" underline="hover" sx={{
            color: 'black', display: 'flex', alignItems: 'center', padding: 1, flexDirection: 'column',
            justifyContent: 'center', marginBottom: 2, borderRadius: '10px', backgroundColor: 'lightgrey', fontWeight: 'bold', fontSize: '15px',
          }}>
            Profile
          </Link>
          <Link href="/logout" underline="hover" sx={{
            color: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', padding: 1,
            backgroundColor: 'lightgrey', fontWeight: 'bold', fontSize: '15px', marginBottom: 2
          }}>
            Logout
          </Link>
          <Link href="/about" underline="hover" sx={{
            color: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', padding: 1,
            backgroundColor: 'lightgrey', fontWeight: 'bold', fontSize: '15px'
          }}>
            About us
          </Link>

        </Box>
      </Popper>
    </Box>
  )

}