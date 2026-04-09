import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import './Home.css';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="page-animate home-container">
      <h1 className="home-title">Welcome to PopX</h1>
      
      <p className="home-subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>

      <div className="home-buttons-wrapper">
        <Button variant="primary" onClick={() => navigate('/register')}>
          Create Account
        </Button>
        <Button variant="secondary" onClick={() => navigate('/login')}>
          Already Registered? Login
        </Button>
      </div>
    </div>
  );
}
