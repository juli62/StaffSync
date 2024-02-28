import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Title, Navbar, LogIn, SignUp, Card, Accept } from './Components/Index'
import AlertDialogSlide from './Components/PopUp';
import MultiActionAreaCard from './Components/Card';



const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <header className="App-header">
          <Navbar />

          <div className="CenterDiv">
            <p className='Text'>Log In</p>
            <LogIn />

          </div>
          <div className='PDFContent'>
            <MultiActionAreaCard />
            <MultiActionAreaCard />
            <MultiActionAreaCard />
            <MultiActionAreaCard />
            <MultiActionAreaCard />
            <MultiActionAreaCard />
            <MultiActionAreaCard />
          </div>
          <AlertDialogSlide />
          <Accept />




          <Title />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
