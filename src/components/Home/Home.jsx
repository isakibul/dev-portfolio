import headerBackground from '/hero-bg.png';
import bottomBackground from '/bottom-bg.png';

import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";
import About from '../About/About';
import Contact from '../Contact/Contact';

const Home = () => {
    const headerBackgroundStyle = {
        backgroundImage: `url(${headerBackground})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };

    const bottomBackgroundStyle = {
        backgroundImage: `url(${bottomBackground})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };

    return (
        <div>
            <div style={headerBackgroundStyle} className='h-screen'>
                <Navbar />
                <Hero />
            </div>
            <Projects />
            <About />
            <div style={bottomBackgroundStyle} className='h-screen'>
                <Contact />
            </div>
        </div>
    );
}

export default Home;
