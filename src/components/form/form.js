import React from 'react';
import { Box, Grid, TextField, Button } from '@mui/material';

function Form() {
  return (
    <Box>
        <form>
            <Grid container spacing={1}>
            <Grid xs={12} sm={6} item>
                <TextField placeholder="Enter first name" label="First Name" variant="outlined" fullWidth required />
            </Grid>
            <Grid xs={12} sm={6} item>
                <TextField placeholder="Enter last name" label="Last Name" variant="outlined" fullWidth required />
            </Grid>
            <Grid item xs={12}>
                <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
            </Grid>
            <Grid item xs={12}>
                <TextField type="number" placeholder="Enter phone number" label="Phone" variant="outlined" fullWidth required />
            </Grid>
            <Grid item xs={12}>
                <TextField type="address" placeholder="Address" label="Address" variant="outlined" fullWidth required />
            </Grid>
            <Grid item xs={12}>
                <TextField label="Message" multiline rows={5} placeholder="Type your message here" variant="outlined" fullWidth required />
            </Grid>
            <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
            </Grid>
            </Grid>
        </form>
    </Box>
  )
}

export default Form