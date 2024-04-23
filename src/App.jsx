import { ThemeProvider } from './context/ThemeProvider';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Cursor from './components/cursor/Cursor';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';

import React, { useState } from 'react';
import useLocoScroll from './hooks/useLocoScroll';


function App() {
  useLocoScroll(true);

  return (
    <>
      <ThemeProvider>
        <Cursor />
        <div id="main-content" >
          <Navbar />
          <Hero />
          <About />
          <Services />
          <Resume />
          <Portfolio />
          <Contact />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
