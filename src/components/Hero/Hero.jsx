import { useState } from 'react';
import heroImg from '/hero-image.png';
import { TypeAnimation } from 'react-type-animation';
import scrollDown from "/scroll-down.svg"

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
                        className='text-4xl md:text-6xl text-white font-righteous font-bold z-50'
                    />
                    {showSubtitle &&
                        <TypeAnimation
                            cursor={true}
                            sequence={[
                                1000,
                                'You are here?',
                                1000,
                                'Welcome!',
                                1000,
                                'Iam Sakibul Islam...',
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
                                "Uhh...you are still here?",
                                1000,
                                "You can scroll down to see my projects...",
                                1000,
                                "You're... still here?",
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
                            className='mt-2 text-l h-10 font-semibold text-white md:text-2xl'
                        />
                    }
                </div>

                <div className="mt-32 md:mt-20">
                    <img src={heroImg} alt="person image" className='w-80 lg:w-96 relative'
                        style={{
                            animation: "moveOutline 4s linear infinite",
                            borderRadius: "50%",
                            overflow: "hidden"
                        }} />
                </div>
            </div>

            {/* scroll down animation */}
            <div className="mt-14 md:mt-0 md:flex justify-between md:justify-start">
                <button
                    className='hidden md:flex items-center gap-2 text-2xl text-white scroll-indicator'
                >
                    Scroll down
                    <img src={scrollDown} alt="" className='w-6' />
                </button>

                {/* animation circle two */}
                <div className='h-20 w-20 hidden md:block rounded-full -translate-y-16 translate-x-96 absolute right-20 bottom-10 animation-circle-two'>
                </div>
            </div>
        </div>
    );
}

export default Hero;
