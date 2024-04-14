import React from 'react';
import logo from './logo.svg';
import tw from 'twin.macro';
import StyledLoginButton from './components/button';
import StyledTextField from './components/textField';

function App() {
  const handleGoogleAuthClick = () => {
    window.location.href = 'http://localhost:3001/auth/google';
  };
  return (
    <div>
        <StyledLoginButton onClick={handleGoogleAuthClick}/>
    </div>
  );
}

export default App;
