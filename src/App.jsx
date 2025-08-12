import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Cursor from './components/cursor/Cursor';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';

import React, { useRef, useState } from 'react';

import { ToastContainer } from 'react-toastify';
import SmoothScroll from './components/SmoothScroll';

function App() {
  const containerRef = useRef(null);

  // Sidebar
  const [openSide, setOpenSide] = useState(false);

  return (
    <>
      <Cursor />


      <SmoothScroll>

        <main ref={containerRef}>
          <div id="main-content" >
            <Navbar
              openSide={openSide}
              setOpenSide={setOpenSide}
            />
            <Hero />
            <About />
            <Services />
            <Resume />
            <Portfolio />
            <Contact />
          </div>
          <ToastContainer />

        </main>
      </SmoothScroll>

    </>
  );
}

export default App;
