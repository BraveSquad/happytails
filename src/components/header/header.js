import React, { useState } from 'react'
import Link from '@mui/material/Link';
import { Box, Popper, Button, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PetsIcon from '@mui/icons-material/Pets';
import Logout from '../logout/logout'


export default function Header() {

  const [anchorEl, setAnchorEl] = useState(null);
  //--------CLEARING OUT LOCALHOST FOR DETAILS PAGE -------------//
  // const clearLocal = (e) => {
  //   localStorage.removeItem('persist:details');
  // }

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <Box sx={styles.mainBox}>
      <Box sx={styles.logoLinkBox}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <Typography sx={styles.logoLinkText}>
            HappyTails
          </Typography>
        </Link>
        <Link href='/' style={{ textDecoration: 'none' }}>
          <PetsIcon sx={styles.logo} />
        </Link>
      </Box>
      <Button sx={styles.button} aria-describedby={id} type="button" onClick={handleClick}>
        <MenuIcon sx={styles.menuIcon} />
      </Button>
      <Popper sx={styles.popper} id={id} open={open} anchorEl={anchorEl}>
        <Box sx={styles.menuBox} >
          <Link href="/profile" underline="hover" sx={styles.menuBoxLink}>
            Profile
          </Link>

          {/* <Link href="/logout" underline="hover" sx={styles.menuBoxLink}>
            Logout
          </Link> */}
          <Link href="/appointments" underline="hover" sx={styles.menuBoxLink}>
            Book An Appointment
          </Link>
          <Link href="/about" underline="hover" sx={styles.menuBoxLink}>
            About us
          </Link>
          <Link href="/reviews" underline="hover" sx={styles.menuBoxLink}>
            Reviews
          </Link>
          <Logout />
        </Box>
      </Popper>
    </Box>
  )
}

const styles = {
  mainBox: {
    display: 'flex',
    width: '100%',
    backgroundColor: '#1ee8c0',
    // backgroundColor: '#40404049',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100px',
    // paddingRight: '20px',
    // paddingLeft: '100px',
  },
  logoLinkBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    textDecoration: 'none',
    marginLeft: 6,
  },
  logoLinkText: {
    color: 'white',
    fontSize: '40px',
    textDecoration: 'none',
    fontFamily: 'Raleway',
    fontWeight: 'bold',
    marginRight: 1,
  },
  logo: {
    fontSize: '3rem',
    color: 'grey'
  },
  button: {
    width: '3%',
    marginRight: 6,
    // border: '1px solid red'
  },
  menuIcon: {
    color: 'white',
  },
  menuBox: {
    // p: 1, 
    bgcolor: 'background.paper',
    padding: 3,
    marginTop: 1,
    borderRadius: '10px',
    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgb(60, 201, 226,0.39) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;',
    border: '1px solid black',
  },
  menuBoxLink: {
    padding: 1,
    color: 'black',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 2,
    borderRadius: '10px',
    backgroundColor: 'lightgrey',
    fontWeight: 'bold',
    fontSize: '15px',
  },
}