import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Title, Navbar, LogIn, SignUp, Card, Accept } from './Components/Index'
import AlertDialogSlide from './Components/PopUp';
import MultiActionAreaCard from './Components/Card';
import SimpleBackdrop from './Components/PopUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Library from './AppLibrary';
import SingIn from './LogIn';
import Register from './Register';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/library" element={<Library />} />
            <Route path="/login" element={<SingIn />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>

      </div>
    </ThemeProvider >
  );
}

export default App;
