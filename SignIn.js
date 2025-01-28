import React from 'react';

const SignInForm = ({ onBackClick }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#fff3e0',
      }}
    >
      {/* Back Button */}
      <button
        onClick={onBackClick}
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          fontSize: '1.2rem',
          fontFamily: 'Poppins, sans-serif',
          color: '#ff6f61',
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
          Sign In
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
            placeholder="Enter your password"
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
            <u>Sign In</u>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;