import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';
import './Login.css';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // UX Optimization: Derived state to cleanly check validation
  const isFormValid = email.trim() !== '' && password.trim() !== '';

  const handleLogin = (e) => {
    e.preventDefault();
    if (isFormValid) {
      navigate('/account');
    }
  };

  return (
    <div className="page-animate login-container">
      <h1 className="login-title">Signin to your PopX account</h1>
      <p className="login-subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>

      <form onSubmit={handleLogin} className="login-form">
        <Input 
          label="Email Address" 
          type="email" 
          placeholder="Enter email address" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input 
          label="Password" 
          type="password" 
          placeholder="Enter password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <div className="login-submit-wrapper">
          <Button type="submit" variant="primary" disabled={!isFormValid}>
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}
