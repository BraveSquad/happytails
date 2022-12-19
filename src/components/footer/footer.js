import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Box, Link, Typography } from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';


export default function Footer() {
  return (
    <Box elevation={5} sx={styles.mainBox}>
      <Box sx={styles.topBox}>
        <Typography sx={styles.topBoxText}>
          HappyTails <PetsIcon />
        </Typography>
      </Box>
      <Box sx={styles.middleBox}>
        <Box sx={styles.middleBoxColumn}>
          <Link>
            Link 1
          </Link>
          <Link>
            Link 1
          </Link>
          <Link>
            Link 1
          </Link>
          <Link>
            Link 1
          </Link>
        </Box>
        <Box sx={styles.middleBoxColumn}>
          <Link>
            Link 2
          </Link>
          <Link>
            Link 2
          </Link>
          <Link>
            Link 2
          </Link>
          <Link>
            Link 2
          </Link>
        </Box>
        <Box sx={styles.middleBoxColumn}>
          <Link>
            Link 3
          </Link>
          <Link>
            Link 3
          </Link>
          <Link>
            Link 3
          </Link>
          <Link>
            Link 3
          </Link>
        </Box>
        <Box sx={styles.middleBoxColumn}>
          Sign Up
        </Box>
      </Box>
      <Box sx={styles.bottomBox}>
        <Box sx={styles.logoBox}>
          <Typography sx={styles.logoText}>
            &copy; HappyTails 2022
          </Typography>
        </Box>
        <Box sx={styles.mediaLinkBox}>
          <Link sx={styles.mediaIcon} href="https://www.facebook.com/" target="_blank"> <FaFacebook /></Link>
          <Link sx={styles.mediaIcon} href="https://www.instagram.com" target="_blank"> <FaInstagram /></Link>
          <Link sx={styles.mediaIcon} href="https://www.twitter.com" target="_blank"> <FaTwitter /></Link>
          <Link sx={styles.mediaIcon} href="https://www.linkedIn.com" target="_blank"> <FaLinkedin /></Link>
        </Box>
      </Box>

    </Box>
  )
}

const styles = {
  mainBox: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  topBox:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '35px',
    backgroundColor: 'grey',
  },
  topBoxText: {
    TextAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: 'white',
    fontSize: '1.5rem',
    // fontFamily: 'Raleway',
    fontFamily: 'Kaushan Script',
    width: '7%',
  },
  middleBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height:  '200px',
    marginTop: '30px',
    marginBottom: '10px',
    // border: '1px solid red',
  },
  middleBoxColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '100%',
    width: '30%',
    // border: '1px solid red',
  },
  bottomBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 2,
    marginBottom: 2,
    // border: '2px solid red',
  },
  logoBox: {
    marginLeft: 3,
    // border: '2px solid black',
  },
  logoText: {
    fontSize: '1.3rem',
    fontFamily: 'Raleway',
    fontWeight: 'bold',
  },
  mediaLinkBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginRight: 4,
    width: '15%'
    // border: '2px solid blue',
  },
  mediaIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    fontSize: '2.5rem',
  }
}
