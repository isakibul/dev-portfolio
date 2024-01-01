import { useState } from 'react';
import heroImg from '/hero-img.png';
import { TypeAnimation } from 'react-type-animation';
import { BsFillFileArrowDownFill } from "react-icons/bs";

const Hero = () => {
    const [showSubtitle, setShowSubtitle] = useState(false);
    return (
        <div className='px-10 md:px-30 lg:px-40'>

            {/* animation circle */}
            <div className='mt-10 h-28 w-28 hidden md:block rounded-full translate-y-20 translate-x-96 absolute animation-circle'>
            </div>

            {/* home text slider */}
            <div className="mt-16 md:mt-0 flex flex-col items-center justify-center md:flex-row md:justify-between">
                <div className="mt-5 text-center md:text-left text-xl">
                    <TypeAnimation
                        cursor={false}
                        sequence={[
                            'Hi, I\'m SaKib.',
                            () => setShowSubtitle(true)
                        ]}
                        speed={{ type: "keyStrokeDelayInMs", value: 150 }}
                        wrapper="h1"
                        repeat={0}
                        className='text-4xl md:text-6xl text-white font-semibold z-50'
                    />
                    {showSubtitle &&
                        <TypeAnimation
                            cursor={true}
                            sequence={[
                                1000,
                                'Dude! you are here?',
                                1000,
                                'So, you are interested about me?',
                                1000,
                                'Okay! This is Sakibul Islam...',
                                1000,
                                'A Web Application Developer.',
                                1000,
                                'A Computer Science Student.',
                                1000,
                                'A problem solver.',
                                1000,
                                'An innovative thinker.',
                                1000,
                                'A....',
                                1000,
                                'A.... cool guy?',
                                1000,
                                "Okay?",
                                1000,
                                "Ok...  I'm running out of ideas...",
                                1000,
                                "Uhh...",
                                1000,
                                "Uhh... you can scroll down...",
                                300,
                                1000,
                                "Seriously, my projects are elegant...",
                                1000,
                                "Go & check them out!",
                                1000,
                                "You're uh...",
                                1000,
                                "You're uh... still here?",
                                1000,
                                "Ok, this has been fun...",
                                1000,
                                "I'm gonna restart the loop now!",
                                1000,
                                "See ya! :)",
                                500,
                            ]}
                            speed={50}
                            deletionSpeed={65}
                            wrapper="h5"
                            repeat={Infinity}
                            className='mt-2 text-l font-semibold text-white md:text-2xl'
                        />
                    }
                </div>

                <div className="mt-20 md:mt-10">
                    <img src={heroImg} alt="person image" />
                </div>
            </div>

            {/* scroll down animation */}
            <div className="mt-14 md:mt-0 md:flex justify-between md:justify-start">
                <button
                    className='hidden md:flex text-2xl font-semibold text-white scroll-indicator'
                >
                    Scroll down
                    <BsFillFileArrowDownFill className='text-3xl' />
                </button>

                {/* animation circle two */}
                <div className='h-20 w-20 hidden md:block rounded-full -translate-y-16 translate-x-96 absolute right-20 bottom-10 animation-circle-two'>
                </div>
            </div>
        </div>
    );
}

export default Hero;
