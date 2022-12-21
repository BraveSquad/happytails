
import React from 'react'
import { Box, Card, CardMedia, CardContent, Typography } from '@mui/material';
import { useAuth0 } from "@auth0/auth0-react";
import Favorites from '../favorite/favorite';

const Profile = (props) => {
  // console.log('props from PROFILE', props)

  const { user, isAuthenticated } = useAuth0();
  
  let profileUser = (
    <Box sx={styles.wrapperBox}>
      <Box sx={styles.profileBox}>
        <Typography sx={styles.textProfileTitle}>Profile</Typography>
        <Card key={'key'} sx={styles.card} elevation={5}>
          <CardMedia image={user.picture} sx={styles.cardMedia} />
          <CardContent sx={styles.CardContent}>
            <Box sx={styles.boxUserDetails}>
              <Box sx={styles.boxName}>
                <Typography sx={styles.textUserDetailsBold}>Name: </Typography>
                <Typography sx={styles.textUserDetails}>{user.given_name}</Typography>
              </Box>
              <Box sx={styles.boxEmail}>
                <Typography sx={styles.textUserDetailsBold}>Email:</Typography>
                <Typography sx={styles.textUserDetails}>{user.email}</Typography>
             </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Box sx={styles.favoritesBox} >
        <Typography sx={styles.textFavoriteTitle}>Favorites</Typography>
        <Favorites auth0={props.auth0} user={props.user} />
      </Box>
    </ Box >
  )

  return (
    isAuthenticated && (
      <Box sx={styles.mainBox}>
        {profileUser}
      </Box>
    )
  )
}

export default Profile;

const styles = {
  mainBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
    // border: '1px solid grey',
  },
  wrapperBox: {
    display: 'flex', 
    justifyContent: 'space-around',
    alignItems: 'center', 
    width: '90%',
    // border: '1px solid black'
  },
  profileBox: {
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center',
    width: '600px',
    height: '800px',
    // border: '1px solid black'
  },
  favoritesBox: {
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center',
    height: '800px',
    width: '40%',
    borderRadius: '4px',  
    // border: '1px solid black'
  },
  card: {
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center',
    height: '700px',
    paddingLeft: 1, 
    paddingRight: 1, 
    // borderRadius: '7px', 
    // border: '1px solid black'
  },
  cardMedia: {
    height: '450px', 
    width: '100%',
    marginTop: 2,
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
    borderRadius: 1,
    // border: '1px solid black',
  },
  CardContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 4,
    width: '100%',
    // border: '1px solid green',
  },
  boxUserDetails: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    height: '100px',
    // border: '1px solid black',
    // marginTop: 2,
  },
  boxName: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    border: '1px solid grey',
    borderRadius: 1,
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
  },
  boxEmail: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    borderRadius: 1,
    border: '1px solid grey',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
  },
  textUserDetailsBold: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    width: '40%',
    fontFamily: 'Raleway',
    // border: '1px solid black',
  },
  textUserDetails: {
    display: 'flex', 
    fontSize: '1.3rem',
    width: '60%',
    fontFamily: 'Raleway',
  },
  textFavoriteTitle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Raleway',
    fontWeight: 'bold',
    fontSize: '3rem',
  },
  textProfileTitle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Raleway',
    fontWeight: 'bold',
    fontSize: '3rem',
  },
}
