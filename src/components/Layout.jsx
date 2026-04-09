import React from 'react';
import './Layout.css';

export default function Layout({ children }) {
  return (
    <div className="layout-wrapper">
      <div className="mobile-container">
        {children}
      </div>
    </div>
  );
}
