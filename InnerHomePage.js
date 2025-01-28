import React from 'react';
import InnerNavbar from './InnerNavbar'; // Importing the InnerNavbar component

// Inner Home Page Component
const InnerHomePage = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#fff3e0',
      }}
    >
      {/* Navbar */}
      <InnerNavbar />

      {/* Content Section */}
      <div
        style={{
          padding: '20px',
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          marginTop: '100px', // Adjusted for fixed navbar
          width: '80%',
          maxWidth: '800px',
          textAlign: 'center',
        }}
      >
        <h2>Welcome to PetAdopt Inner Home Page!</h2>
        <p>This is the inner page after successful sign-in or sign-up.</p>
      </div>
    </div>
  );
};

export default InnerHomePage;