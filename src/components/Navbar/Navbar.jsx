import React, { useEffect, useState } from "react";
import { NavbarElements } from "./NavbarElements";
import { ImMenu } from "react-icons/im";
import { IoClose } from "react-icons/io5";
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);

    const handleNav = () => {
        setNavOpen(!navOpen);
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 767) {
                setNavOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <nav
            className="z-10 px-10 md:px-30 py-6 lg:px-40 relative"
        >
            {/* desktop nav */}
            <div
                className="flex justify-between items-center"
            >
                <div>
                    <a
                        href="/"
                    >
                        <img
                            src="/logo.png"
                            alt="site-log"
                            className="w-10"
                        />
                    </a>
                </div>
                <div>
                    <ul
                        className="hidden md:flex text-white gap-10 text-2xl"
                    >
                        {NavbarElements.map((item, idx) => (
                            <li
                                key={idx}
                                className="hover:text-gray-400 ease-in duration-200"
                            >
                                <HashLink smooth to={item.path}>
                                    {item.name}
                                </HashLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <button
                        className="hidden md:block bg-[#3498db] hover:bg-blue-600 px-4 py-2 text-white text-xl font-bold rounded ease-in duration-300"
                    >
                        Resume
                    </button>
                </div>
                <div
                    className="md:hidden"
                >
                    {navOpen ? <IoClose className="cursor-pointer text-white text-[30px]" onClick={handleNav} />
                        : <ImMenu className="cursor-pointer text-white text-[30px]" onClick={handleNav} />}
                </div>
            </div>

            {/* mobile menu */}
            {navOpen && (
                <div
                    className="md:hidden text-2xl flex flex-col justify-center items-center text-center fixed top-0 left-0 right-0 bottom-0 bg-white"
                >
                    <ul>
                        {NavbarElements.map((item, idx) => (
                            <li
                                key={idx}
                                className="mb-6 font-semibold hover:text-gray-800 ease-in duration-200" onClick={handleNav}
                            >
                                <HashLink smooth to={item.path}>
                                    {item.name}
                                </HashLink>
                            </li>
                        ))}
                    </ul>
                    <button
                        className="bg-blue-600 hover:bg-blue-800 px-4 py-2 text-white text-xl font-bold rounded"
                    >
                        Resume
                    </button>
                    <IoClose
                        className="mt-6 cursor-pointer text-[30px]"
                        onClick={handleNav}
                    />
                </div>
            )}
        </nav>
    );
};

export default Navbar;
