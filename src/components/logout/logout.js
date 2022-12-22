import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button data-testid='logout' sx={styles.menuBoxLink} variant="outlined" onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </Button>

  );
};

export default LogoutButton;

const styles = {

  menuBoxLink: {
    color: 'black',
    display: 'flex',
    alignItems: 'center',
    padding: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 2,
    borderRadius: '10px',
    // backgroundColor: 'lightred',
    fontWeight: 'bold',
    fontSize: '12px',
    width: 180,
    height: 35
  }
}