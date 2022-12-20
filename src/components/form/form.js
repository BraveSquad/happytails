import React, { useState } from 'react';
import { Box, Grid, TextField, Button, Alert } from '@mui/material';

// ---------------- ALERT FOR INQUIRY----------------//
export function Alerts() {
    return (
        <Box sx={{ width: '100%', backgroundColor: 'rgba(109, 249, 140, 0.1)', borderRadius: '7px' }}>
            <Alert
                variant="outlined"
                severity="success"
                sx={{ mb: 2 }}
            >
                Request Complete- <strong>Thank you for your Inqury!</strong>
            </Alert>
        </Box>
    );
}



function Form() {
    const [alert, useAlert] = useState('');

    function ClearOut() {
        useAlert('');
    }

    setTimeout(ClearOut, 10000)

    function SubmitAlert() {

        useAlert(Alerts)
    }


    return (
        <>
            {alert}
            < Box >
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
                            <Button onClick={() => SubmitAlert()} type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                        </Grid>
                    </Grid>
                </form>
            </Box >
        </>
    )
}

export default Form