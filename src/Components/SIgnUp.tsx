import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function SignUp() {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '20ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="outlined-basic" label="Email" variant="outlined" />
            <TextField id="outlined-basic" label="Password" variant="outlined" />
            <TextField id="outlined-basic" label="Repeat Password" variant="outlined" />
            <Button variant="contained">Sign Up</Button>
        </Box>
    );
}