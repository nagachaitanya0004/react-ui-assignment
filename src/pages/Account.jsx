import React from 'react';
import './Account.css';

export default function Account() {
  
  // Clean mock object matching visual design requirements
  const user = {
    name: "Marry Doe",
    email: "Marry@Gmail.com",
    avatarUrl: "", // Simulating a blank image to trigger the fallback gradient
    description: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam"
  };

  return (
    <div className="page-animate account-container">
      
      {/* 1. Clean Top Header */}
      <div className="account-header">
        <h1 className="account-title">Account Settings</h1>
      </div>

      {/* 2. Premium Shadow Card wrapper for Profile */}
      <div className="account-card">
        
        <div className="account-avatar">
          {/* Graceful fallback if user has no image uploaded */}
          {user.avatarUrl ? (
            <img src={user.avatarUrl} alt="Cover" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
          ) : (
            // Generates initials (e.g. "M") inside a purple gradient circle
            user.name.charAt(0).toUpperCase()
          )}
        </div>
        
        <h2 className="account-name">{user.name}</h2>
        <p className="account-email">{user.email}</p>
        
      </div>

      {/* 3. Faded Description Text */}
      <div className="account-description-section">
        <p className="account-description">
          {user.description}
        </p>
      </div>
      
    </div>
  );
}
