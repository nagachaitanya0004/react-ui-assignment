import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import './Register.css';

export default function Register() {
  const navigate = useNavigate();
  // Grouping state objects cleanly
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: 'yes'
  });

  // Universal handler mapped to Input names
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validation strictly evaluating all text fields
  const isFormValid = 
    formData.name.trim() !== '' &&
    formData.phone.trim() !== '' &&
    formData.email.trim() !== '' &&
    formData.password.trim() !== '' &&
    formData.company.trim() !== '';

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid) {
      // Moves user flawlessly down the funnel
      navigate('/account');
    }
  };

  const agencyOptions = [
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' },
  ];

  return (
    <div className="page-animate register-container">
      <h1 className="register-title">Create your PopX account</h1>

      <form onSubmit={handleRegister} className="register-form">
        <Input 
          label="Full Name*" 
          name="name"
          placeholder="Enter your full name" 
          value={formData.name}
          onChange={handleChange}
        />
        <Input 
          label="Phone number*" 
          name="phone"
          placeholder="Enter your phone number" 
          value={formData.phone}
          onChange={handleChange}
        />
        <Input 
          label="Email address*" 
          name="email"
          type="email" 
          placeholder="Enter your email address" 
          value={formData.email}
          onChange={handleChange}
        />
        <Input 
          label="Password*" 
          name="password"
          type="password" 
          placeholder="Create a strong password" 
          value={formData.password}
          onChange={handleChange}
        />
        <Input 
          label="Company name*" 
          name="company"
          placeholder="Enter your company name" 
          value={formData.company}
          onChange={handleChange}
        />
        
        {/* Isolated section for the horizontal radio layout */}
        <div className="register-radio-section">
          <Input 
            label="Are you an Agency?*"
            type="radio"
            name="isAgency"
            value={formData.isAgency}
            onChange={handleChange}
            options={agencyOptions}
          />
        </div>
        
        <div className="register-submit-wrapper">
          <Button type="submit" variant="primary" disabled={!isFormValid}>
            Create Account
          </Button>
        </div>
      </form>
    </div>
  );
}
