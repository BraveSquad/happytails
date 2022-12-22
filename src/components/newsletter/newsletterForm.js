import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

function NewsletterForm(props) {
    const { status, message, onValidate } = props;
    const [email, setEmail] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(null);


        if (onValidate) {
            // console.log('email validation');
            // console.log('EMAIL: email', email)
            //   onValidate({ EMAIL: email });
            onValidate({ email });
        }
    }

    return (
        <Box data-testid='form' sx={styles.mainBox}>
            <Typography sx={styles.title}>
                Subscribe to newsletter
            </Typography>
            <form onSubmit={handleSubmit}>
                {status === 'error' && <p className="error">{message}</p>}
                {status === 'success' && <p className="success">{message}</p>}
                {error && <p className="error">{error}</p>}
                <TextField
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </form>
            <Button sx={styles.button} onClick={handleSubmit} type="submit">
                Subscribe
            </Button>
        </Box>
    );
}

export default NewsletterForm;

const styles = {
    mainBox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // border: '1px solid black',
    },
    button: {
        marginTop: 2,
        padding: 1,
        width: '50%',
        backgroundColor: '#676767',
        color: 'white',
        '&:hover': {
            backgroundColor: '#70E1F5',
            color: '#676767',
            boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
        }
    },
    title: {
        fontFamily: 'Raleway',
        fontWeight: 'bold',
        paddingBottom: 2,
    }
}