import React from 'react';
import { Link } from 'react-router-dom';

// Navbar Component
const InnerNavbar = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        backgroundColor: '#ff6f61',
        color: '#fff',
        display: 'flex',
        justifyContent: 'space-between', // Ensure equal spacing
        alignItems: 'center',
        padding: '15px 30px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      {/* Logo */}
      <div style={{ flexShrink: 0 }}>
        <h1
          style={{
            margin: 0,
            fontSize: '1.5rem',
            fontFamily: 'Poppins, sans-serif',
            color: 'white',
          }}
        >
          PetAdopt
        </h1>
      </div>

      {/* Navigation Links */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '70px',
          flexGrow: 1, // Allows the links to occupy space proportionally
        }}
      >
        <Link
          to="/adopt"
          style={{
            textDecoration: 'underline',
            color: '#fff',
            fontFamily: 'Poppins, sans-serif',
            fontSize: '18px',
          }}
        >
          Home
        </Link>
        <Link
          to="/donate"
          style={{
            textDecoration: 'underline',
            color: '#fff',
            fontFamily: 'Poppins, sans-serif',
            fontSize: '18px', // Consistent font size
          }}
        >
          Donate
        </Link>
        <Link
          to="/adopt"
          style={{
            textDecoration: 'underline',
            color: '#fff',
            fontFamily: 'Poppins, sans-serif',
            fontSize: '18px',
          }}
        >
          Adopt
        </Link>
        
        <Link
          to="/volunteer"
          style={{
            textDecoration: 'underline',
            color: '#fff',
            fontFamily: 'Poppins, sans-serif',
            fontSize: '18px',
          }}
        >
          Volunteer
        </Link>
        <Link
          to="/contact-us"
          style={{
            textDecoration: 'underline',
            color: '#fff',
            fontFamily: 'Poppins, sans-serif',
            fontSize: '18px',
          }}
        >
          Contact Us
        </Link>
        <Link
          to="/about-us"
          style={{
            textDecoration: 'underline',
            color: '#fff',
            fontFamily: 'Poppins, sans-serif',
            fontSize: '18px',
          }}
        >
          About Us
        </Link>
      </div>

      {/* Auth Button */}
      <div style={{ flexShrink: 0 }}>
        <Link
          to="/"
          style={{
            textDecoration: 'none',
          }}
        >
          <button
            style={{
              backgroundColor: '#fff',
              color: '#ff6f61',
              border: 'none',
              padding: '8px 15px',
              fontSize: '14px',
              fontFamily: 'Poppins, sans-serif',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Logout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default InnerNavbar;
