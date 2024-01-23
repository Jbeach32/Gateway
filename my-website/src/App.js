import React, { useState } from 'react';
import './App.css';
import logo from './5.jpg'; // Import the jpg file

function App() {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="App">
      <div className="background-image" />
      <div className="content">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="text-container">
          <h1 className="n1">Welcome to Numerical1</h1>
          <p className="centered-text">Your Gateway to Expert-Led, AI-enhanced Lab Data</p>
        </div>
        <div className="button-container">
          <button className="contact-button" onClick={openPopup}>Contact Me</button>
        </div>
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={closePopup}>
              &times;
            </span>
            <h2>Contact Me</h2>
            <p>You can contact me at: dhilburn21@gmail.com</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;




