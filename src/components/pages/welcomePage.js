import React from 'react'
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from '../login/login'
// import Dog from '../../assets/images/dog.png'
import Video from '../../assets/images/DogVideo.mp4'
import '../../assets/style/welcome.css'

const Welcome = (props) => {
  const {
    isAuthenticated
  } = props.auth0;

  return (

    <div id="background" >
      <div className='content' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: '100%', width: '100%', position: 'absolute', zIndex: 10 }}>
        {isAuthenticated}
        <div className='content' style={{ fontSize: '60px', position: 'absolute', top: 0, left: 0 }}> Welcome to HappyTails <LoginButton /> </div>
      </div>

      <video id='dogVideo' autoPlay loop muted src={Video} type="video/mp4" />
    </div>

  )
}
export default withAuth0(Welcome);
