
import React from 'react'
import { Box, Card, CardHeader, CardMedia, CardContent, Typography } from '@mui/material';
import { useAuth0 } from "@auth0/auth0-react";
import Favorites from '../favorite/favorite';

const Profile = (props) => {
  console.log('props from PROFILE', props)

  const { user, isAuthenticated } = useAuth0();
  // const { isLoading } = props.user;
  // if (isLoading) {
  //   return (
  //     <div >
  //       ...WAITING UNTIL I DIE!!!
  //     </div>
  //   );
  // }
  
  let profileUser = (
    <Box sx={styles.wrapperBox}>
      <Box sx={styles.profileBox}>
        <Card key={'key'} sx={styles.card} elevation={5}>
          <CardMedia image={user.picture} sx={styles.cardMedia} />
          <CardContent>
            <Typography>
              Profile
            </Typography>
          </CardContent>
          <div id='detailInfo'>
            <Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}>
              Profile
            </Typography>
            <div id='line-1' >
              <hr />
            </div>
            <Typography sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
              <p style={{ fontWeight: 'bold', fontSize: '15px', marginRight: '5px' }}> Name: </p> {user.given_name}
            </Typography>

            <Typography sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}  >
              <p style={{ fontWeight: 'bold', fontSize: '15px', marginRight: '5px' }}>Email: </p> {user.email}
            </Typography>

          </div>

        </Card>
      </Box>
      <Box sx={styles.favoritesBox} >
        <Typography sx={styles.favoritesTitleText}>
          Favorites
        </Typography>
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
    // border: '3px solid red',
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
  },
  favoritesBox: {
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center',
    height: '800px',
    // width: '600px',
    width: '40%',
    borderRadius: '4px',
    // padding: 2,
    // boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgb(60, 201, 226,0.39) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;',
  },
  card: {
    padding: '30px', 
    borderRadius: '7px', 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center',
  },
  cardMedia: {
    height: '300px', 
    width: '300px', 
    // width: '80%',
    borderRadius: '4px',
  },
  favoritesTitleText: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Raleway',
    fontWeight: 'bold',
    fontSize: '3rem'
  }
}
