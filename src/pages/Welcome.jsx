import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="page-animate" style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      height: '100%', 
      padding: '20px',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    }}>
      <div style={{ 
        width: '80px', 
        height: '80px', 
        background: 'linear-gradient(135deg, #a855f7 0%, #7e22ce 100%)', 
        borderRadius: '24px',
        marginBottom: '24px',
        boxShadow: '0 8px 20px rgba(126, 34, 206, 0.25)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '2rem',
        fontWeight: 'bold'
      }}>
        App
      </div>
      
      <h1 style={{ marginBottom: '10px' }}>Get Started</h1>
      <p style={{ color: '#666', marginBottom: '40px', lineHeight: '1.5' }}>
        Welcome to our awesome React application. Please login or register to continue exploring.
      </p>

      <div style={{ width: '100%', marginTop: 'auto', paddingBottom: '20px' }}>
        <Button variant="primary" onClick={() => navigate('/login')}>
          Login
        </Button>
        <Button variant="secondary" onClick={() => navigate('/register')}>
          Register
        </Button>
      </div>
    </div>
  );
}
