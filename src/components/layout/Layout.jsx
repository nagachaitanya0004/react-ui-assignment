import React from 'react';
import './Layout.css';

/**
 * Reusable Mobile-First Layout Component
 * Centers application content inside a simulated mobile device frame on desktop,
 * and stretches perfectly on native mobile screens.
 */
export default function Layout({ children }) {
  return (
    <div className="layout-wrapper">
      <div className="mobile-container">
        {children}
      </div>
    </div>
  );
}
