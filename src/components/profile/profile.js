
import React from 'react'
import { Box, Card, CardMedia, Typography } from '@mui/material';
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
    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 10, paddingLeft: 10 }} >

      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '600px' }}>
        <Card key={'key'} sx={{ padding: '30px', borderRadius: '7px', display: 'flex', flexDirection: 'column', alignItems: 'center' }} elevation={5}>
          <CardMedia image={user.picture} sx={{ height: '300px', width: '300px', borderRadius: '4px' }} />
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

      <Box sx={{
        marginLeft: 40,
        height: '800px',
        width: '600px',
        borderRadius: '4px',
        padding: 2,
        boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgb(60, 201, 226,0.39) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;',

      }} >
        <Favorites auth0={props.auth0} user={props.user} />
      </Box>

    </ Box >

  )

  return (
    isAuthenticated && (
      <Box>
        {profileUser}
      </Box>
    )
  )

}

export default Profile