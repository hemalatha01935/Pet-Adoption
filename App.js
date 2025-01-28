import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import './App.css';
import InnerHome from './components/InnerHome';

function App() {
  const [view, setView] = useState('home'); // Manage views: 'home', 'signin', 'signup'

  const handleSignInClick = () => {
    setView('signin');
  };

  const handleSignUpClick = () => {
    setView('signup');
  };

  const handleBackClick = () => {
    setView('home');
  };
  const App = () => {
    return (
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignInForm />} />
        <Route path="/sign-up" element={<SignUpForm />} />
        <Route path="/inner-home" element={<InnerHome />} />
      </Routes>
    </Router>
    );
  };

  return (
    <Router>
      {view === 'home' && (
        <>
          <Navbar onSignInClick={handleSignInClick} onSignUpClick={handleSignUpClick} />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </>
      )}
      {view === 'signin' && <SignInForm onBackClick={handleBackClick} />}
      {view === 'signup' && <SignUpForm onBackClick={handleBackClick} />}
    </Router>
  );
}

export default App;