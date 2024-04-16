import { ThemeProvider } from './context/ThemeProvider';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Cursor from './components/cursor/Cursor';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';


function App() {

  return (
    <>
      <ThemeProvider>
        <Cursor />
        <Navbar />
        <div id="main-content">
          <section id='Home' className='hero-section'
          >
            <Hero />
          </section>
          <section id='About' className='about-section'>
            <About />
          </section>
          <section id='Services' className='services-section'>
            <Services />
          </section>
          <section id='Resume' className='resume-section'>
            <Resume />
          </section>
          <section id='Portfolio' className='portfolio-section'>
            <Portfolio />
          </section>
          <section id='Contact' className='contact-section'>
            <Contact />
          </section>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
