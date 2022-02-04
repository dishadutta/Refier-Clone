import React from 'react';
// import './App.css';
import { Container } from './container';

const LoginButton = () => {
  const triggerText = 'Login';
  const onSubmit = (event) => {
    event.preventDefault(event);
    console.log(event.target.name.value);
    console.log(event.target.email.value);
    alert('Successfully Logged In');
  };
  return (
    <div >
      <Container style={{color:'black', fontWeight:'bold', border:'solid #000 1px', padding:'4.5px 40px 4.5px 40px', borderRadius:'0.2rem'}} triggerText={triggerText} onSubmit={onSubmit} />
      
    </div>
  );
};

export default LoginButton;
