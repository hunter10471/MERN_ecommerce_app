import React from 'react';
import { Navbar } from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from './components/Footer';
import { AnimatedRoutes } from './components/AnimatedRoutes';
import {HelmetProvider} from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
