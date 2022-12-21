import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

function LoadingSpinner() {

  return (
    <Box sx={styles.mainBox}>
      <Typography sx={styles.textLoading}>Loading...</Typography>
      <CircularProgress />
    </Box>
  );
}

export default LoadingSpinner;

const styles = {
  mainBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100vh',
  },
  textLoading: {
    fontFamily: 'Raleway',
    fontWeight: 'bold',
    fontSize: '3rem',
    marginRight: 1,
  }
}