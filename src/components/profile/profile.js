
import React from 'react'
import { Box, Card, CardMedia, Typography } from '@mui/material';
import Header from '../header/header'
import { useAuth0 } from "@auth0/auth0-react";
import Footer from '../footer/footer'
import Favorites from '../favorite/favorite';

const Profile = (props) => {


  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  // useEffect(() => {

  //   handleGetUser()
  // }, [])

  console.log('OK HERE', user)








  // let handleGetUser = async () => {

  //   // if (props.auth0.isAuthenticated) {
  //   const res = await props.auth0.getIdTokenClaims();
  //   console.log('res', res)
  //   const jwt = res.__raw;

  //   const config = {
  //     headers: { Authorization: `Bearer ${jwt}` },
  //     method: 'POST',
  //     baseURL: `${process.env.REACT_APP_HEROKU_URL}`,
  //     url: '/user',
  //     data: props.auth0
  //   };
  //   const rest = await axios(config);
  //   console.log('USER CONFIG', rest.data);
  //   // }
  // };



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
        <Favorites auth0={props.auth0} />
      </Box>

    </ Box >

  )

  return (
    isAuthenticated && (
      <Box>
        <Header />
        {profileUser}
        <Footer />
      </Box>
    )
  )

}

export default Profile