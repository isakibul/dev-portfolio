import React, { useState } from "react";
import NavbarElements from "./NavbarElements";
import { ImMenu } from "react-icons/im";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <nav className="px-10 md:px-30 py-6 lg:px-40 relative">
            <div className="flex justify-between items-center ">
                <div>
                    <a href="/">
                        <img src="/logo.png" alt="site-log" className="w-10" />
                    </a>
                </div>
                <div>
                    <ul className="hidden md:flex text-white gap-10 text-2xl">
                        {NavbarElements.map((item, idx) => (
                            <li key={idx} className="hover:text-gray-400 ease-in duration-200">
                                <a href={item.path}>
                                    {item.name}
                                </a>
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
                <div className="md:hidden">
                    {toggle ? <IoClose className="cursor-pointer text-white text-[30px]" onClick={handleToggle} /> : <ImMenu className="cursor-pointer text-white text-[30px]" onClick={handleToggle} />}
                </div>
            </div>

            {/* mobile menu */}
            {toggle && (
                <div className="md:hidden text-2xl flex flex-col justify-center items-center text-center fixed top-0 left-0 right-0 bottom-0 bg-white">
                    <ul>
                        {NavbarElements.map((item, idx) => (
                            <li key={idx} className="mb-6 font-semibold hover:text-gray-800 ease-in duration-200" onClick={handleToggle}>
                                <a href={item.path}>
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <button
                        className="bg-blue-600 hover:bg-blue-800 px-4 py-2 text-white text-xl font-bold rounded"
                    >
                        Resume
                    </button>
                    <IoClose className="mt-6 cursor-pointer text-[30px]" onClick={handleToggle} />
                </div>
            )}
        </nav>
    );
};

export default Navbar;
