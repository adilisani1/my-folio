// import { ThemeProvider } from './context/ThemeProvider';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Cursor from './components/cursor/Cursor';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';

import React, { useEffect, useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css';

function App() {
  const containerRef = useRef(null);

  return (
    <>
      <Cursor />
      <LocomotiveScrollProvider
        options={
          {
            smooth: true,
            multiplier: 1.5,
            class: 'is-reveal'
          }
        }
        containerRef={containerRef}
        watch={[]}
      >

        <main data-scroll-container ref={containerRef}>
          <div id="main-content" >
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Resume />
            <Portfolio />
            <Contact />
          </div>
        </main>
      </LocomotiveScrollProvider>
    </>
  );
}

export default App;
