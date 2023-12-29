import commonBackground from '/hero-bg.png';

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import About from './components/About/About';
import Contact from './components/Contact/Contact';

const App = () => {
  const commonBackgroundStyle = {
    backgroundImage: `url(${commonBackground})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <div>
      <div style={commonBackgroundStyle} className='h-screen'>
        <Navbar />
        <Hero />
      </div>
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
