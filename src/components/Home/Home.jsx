import ScrollToTop from "react-scroll-to-top";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";
import About from '../About/About';
import Contact from '../Contact/Contact';
import SocialIcon from '../SocialIcon/SocialIcon';
import { IoIosArrowUp } from "react-icons/io";
import bg from "/bg.jpg"

const Home = () => {
    // const headerBackgroundStyle = {
    //     backgroundImage: `url(${bg})`,
    //     backgroundSize: 'cover',
    //     backgroundRepeat: 'no-repeat',
    //     backgroundPosition: 'center',
    // };

    return (
        <div className="font-rubik bg-[#0D1224]">
            <ScrollToTop
                smooth
                style={{
                    backgroundColor: '#773EEA',
                    color: '#fff',
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center',
                    fontSize: '24px',
                    borderRadius: '50%',
                    padding: '5px',
                    zIndex: '999',
                }}
                component={<IoIosArrowUp />}
            />

            <div className='h-screen'>
                <Navbar />
                <Hero />
                <div
                    className="hidden lg:flex lg:flex-col lg:fixed lg:top-1/3 lg:left-10 gap-6 text-5xl text-gray-500"
                >
                    <SocialIcon />
                </div>
            </div>
            <Projects />
            <About />
            <Contact />
        </div>
    );
}

export default Home;
