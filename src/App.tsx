import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Title, Navbar, LogIn } from './Components/Index'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />

        <div className="CenterDiv">
          <LogIn />

        </div>



        <Title />
      </header>
    </div>
  );
}

export default App;
