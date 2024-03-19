import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Title, Navbar, LogIn, SignUp, Card, Accept } from './Components/Index'
import AlertDialogSlide from './Components/PopUp';
import MultiActionAreaCard from './Components/Card';
import SimpleBackdrop from './Components/PopUp';



const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function Library() {
    return (
        <ThemeProvider theme={darkTheme}>
            <div className="App">
                <header className="App-header">



                    <SimpleBackdrop />
                    <div className='PDFContent'>
                        <MultiActionAreaCard />
                        <MultiActionAreaCard />
                        <MultiActionAreaCard />
                        <MultiActionAreaCard />
                        <MultiActionAreaCard />
                        <MultiActionAreaCard />
                        <MultiActionAreaCard />
                    </div>






                    <Title />
                </header>
            </div>
        </ThemeProvider>
    );
}

export default Library;
