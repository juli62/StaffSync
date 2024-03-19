import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Title, Navbar, LogIn, SignUp, Card, Accept } from './Components/Index'
import AlertDialogSlide from './Components/PopUp';
import MultiActionAreaCard from './Components/Card';
import SimpleBackdrop from './Components/PopUp';
import { Height } from '@mui/icons-material';



const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function SingIn() {
    return (
        <ThemeProvider theme={darkTheme}>
            <div className="App">
                <header className="App-header">



                    <div className="CenterDiv" id="signUp">
                        <p className='Text'>Log In</p>
                        <LogIn />
                    </div>

                </header>
            </div >
        </ThemeProvider >
    );
}

export default SingIn;
