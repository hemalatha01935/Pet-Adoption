import React from 'react';

const Home = () => {
  return (
    <div
      style={{
        backgroundColor: '#fff3e0',
        minHeight: '100vh',
        padding: '20px',
        fontFamily: 'Poppins, sans-serif',
      }}
    >
      {/* Hero Section */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '40px 20px',
          backgroundColor: '#ff6f61',
          color: '#fff',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div style={{ maxWidth: '50%' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
            Find Your Perfect Pet Companion
          </h1>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
            Discover the joy of pet adoption with PetAdopt. Browse a wide variety of pets looking for a loving home.
          </p>
          <button
            style={{
              marginTop: '20px',
              padding: '12px 20px',
              backgroundColor: '#ffa726',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              fontSize: '1rem',
              cursor: 'pointer',
            }}
          >
            Adopt a Pet
          </button>
        </div>
        <img
          src={${process.env.PUBLIC_URL}/pet.jpeg}
          alt="Happy pets"
          style={{ borderRadius: '8px', maxWidth: '45%' }}
        />
      </div>

      {/* Features Section */}
      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', color: '#ff6f61', marginBottom: '20px' }}>
          Why Choose PetAdopt?
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px',
            marginTop: '20px',
          }}
        >
          <div
            style={{
              padding: '20px',
              backgroundColor: '#fff',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h3 style={{ color: '#ff6f61' }}>Wide Selection</h3>
            <p>Explore a wide variety of pets including dogs, cats, birds, and more.</p>
          </div>
          <div
            style={{
              padding: '20px',
              backgroundColor: '#fff',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h3 style={{ color: '#ff6f61' }}>Trusted Shelters</h3>
            <p>All pets come from verified and trustworthy shelters.</p>
          </div>
          <div
            style={{
              padding: '20px',
              backgroundColor: '#fff',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h3 style={{ color: '#ff6f61' }}>Easy Adoption Process</h3>
            <p>Our streamlined process makes pet adoption quick and hassle-free.</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div
        style={{
          marginTop: '40px',
          textAlign: 'center',
          padding: '20px',
          backgroundColor: '#ffa726',
          color: '#fff',
          borderRadius: '8px',
        }}
      >
        <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>Ready to Make a Difference?</h2>
        <p style={{ fontSize: '1.2rem' }}>
          Start your journey to find the perfect pet or support our mission by donating today.
        </p>
        <button
          style={{
            marginTop: '10px',
            padding: '12px 20px',
            backgroundColor: '#fff',
            color: '#ffa726',
            border: 'none',
            borderRadius: '5px',
            fontSize: '1rem',
            cursor: 'pointer',
          }}
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Home;