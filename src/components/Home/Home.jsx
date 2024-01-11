import React, { useEffect } from 'react';
import ScrollToTop from "react-scroll-to-top";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";
import About from '../About/About';
import Contact from '../Contact/Contact';
import SocialIcon from '../SocialIcon/SocialIcon';
import headerBackground from '/hero-bg.png';
import bottomBackground from '/bottom-bg.png';
import { IoIosArrowUp } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    useEffect(() => {
        AOS.init();
    }, [])

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
        <div className="font-righteous">
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
                <div
                    className="hidden lg:flex lg:flex-col lg:fixed lg:top-1/3 lg:left-10 gap-6 text-5xl text-gray-500"
                >
                    <SocialIcon />
                </div>
            </div>
            <div data-aos="fade-right">
                <Projects />
            </div>
            <div data-aos="fade-left">
                <About />
            </div>
            <div style={bottomBackgroundStyle} className='h-screen'>
                <Contact />
            </div>
        </div>
    );
}

export default Home;
