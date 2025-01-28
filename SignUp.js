import React from 'react';

const SignUpForm = ({ onBackClick }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#fff3e0',
        padding: '20px',
      }}
    >
      <button
        onClick={onBackClick}
        style={{
          alignSelf: 'flex-start',
          margin: '20px',
          backgroundColor: 'transparent',
          border: 'none',
          fontSize: '16px',
          color: '#ff6f61',
          cursor: 'pointer',
          fontFamily: 'Poppins, sans-serif',
        }}
      >
        ← Back
      </button>

      {/* Logo Section */}
      <h1
        style={{
          fontSize: '3rem',
          color: '#ff6f61',
          fontFamily: 'Poppins, sans-serif',
          marginBottom: '20px',
        }}
      >
        PetAdopt
      </h1>

      {/* Form Section */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          padding: '20px',
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          maxWidth: '400px',
          width: '100%',
        }}
      >
        <h2 style={{ textAlign: 'center', color: '#ff6f61', fontFamily: 'Poppins, sans-serif' }}>
          Sign Up
        </h2>
        <form>
          <label
            style={{
              fontFamily: 'Poppins, sans-serif',
              color: '#555',
              marginBottom: '5px',
              display: 'block',
            }}
          >
            <b>Name:</b>
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            style={{
              width: '100%',
              padding: '12px',
              margin: '10px 0',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />
          <label
            style={{
              fontFamily: 'Poppins, sans-serif',
              color: '#555',
              marginBottom: '5px',
              display: 'block',
            }}
          >
            <b>Email:</b>
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              width: '100%',
              padding: '12px',
              margin: '10px 0',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />
          <label
            style={{
              fontFamily: 'Poppins, sans-serif',
              color: '#555',
              marginBottom: '5px',
              display: 'block',
            }}
          >
            <b>Password:</b>
          </label>
          <input
            type="password"
            placeholder="Create a password"
            style={{
              width: '100%',
              padding: '12px',
              margin: '10px 0',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />
          <label
            style={{
              fontFamily: 'Poppins, sans-serif',
              color: '#555',
              marginBottom: '5px',
              display: 'block',
            }}
          >
            <b>Confirm Password:</b>
          </label>
          <input
            type="password"
            placeholder="Confirm your password"
            style={{
              width: '100%',
              padding: '12px',
              margin: '10px 0',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: '#ffa726',
              color: '#fff',
              padding: '12px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
              width: '100%',
              fontFamily: 'Poppins, sans-serif',
              marginTop: '10px',
            }}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;