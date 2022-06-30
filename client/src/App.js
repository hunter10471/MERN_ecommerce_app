import React from 'react';
import { Navbar } from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from './components/Footer';
import { AnimatedRoutes } from './components/AnimatedRoutes';

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </BrowserRouter>
  );
}

export default App;
