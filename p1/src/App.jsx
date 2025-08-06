import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import Auth from './pages/Auth.jsx'
import Dashboard from './pages/Dashboard.jsx'
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/login" element={<Auth/>} />
      <Route path="/Dashboard" element={<Dashboard/>} />
    </Routes>
  );
};

export default App;
