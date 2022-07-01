import React from 'react';
import { Navbar } from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from './components/Footer';
import {HelmetProvider} from 'react-helmet-async';
import { Suspense, lazy } from 'react';
import Loader from './components/Loader';

const Animatedroutes = lazy(()=> import('./components/AnimatedRoutes'));

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<Loader/>}>
          <Animatedroutes />
        </Suspense>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
