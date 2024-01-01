import headerBackground from '/hero-bg.png';
import bottomBackground from '/bottom-bg.png';
import ScrollToTop from "react-scroll-to-top";

import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";
import About from '../About/About';
import Contact from '../Contact/Contact';
import SocialIcon from '../SocialIcon/SocialIcon';

import { IoIosArrowUp } from "react-icons/io";

const Home = () => {
    const headerBackgroundStyle = {
        backgroundImage: `url(${headerBackground})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };

    const bottomBackgroundStyle = {
        ...headerBackgroundStyle,
        backgroundImage: `url(${bottomBackground})`,
    };

    return (
        <div>
            {/* scroll top */}
            <ScrollToTop
                smooth
                style={{
                    backgroundColor: '#3498db',
                    color: '#fff',
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center',
                    fontSize: '24px',
                    borderRadius: '50%',
                    padding: '5px',
                }}
                component={<IoIosArrowUp />}
            />

            <div style={headerBackgroundStyle} className='h-screen'>
                <Navbar />
                <Hero />
                <SocialIcon />
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
