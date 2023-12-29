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
        <div className="px-10 md:px-30 py-6 lg:px-40">
            <div className="flex justify-between items-center">
                <div>
                    <a href="/">
                        <img src="/logo.png" alt="site-log" className="w-10" />
                    </a>
                </div>
                <div>
                    <ul className="hidden md:flex text-white gap-10 text-2xl">
                        {NavbarElements.map((item, idx) => (
                            <li key={idx}>
                                <a href={item.path}>
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <button
                        className="hidden md:block bg-blue-600 hover:bg-blue-800 px-4 py-2 text-white text-xl font-bold rounded ease-in duration-300"
                    >
                        Resume
                    </button>
                </div>
                <div className="md:hidden">
                    {toggle ? <IoClose fontSize={40} cursor={"pointer"} onClick={handleToggle} /> : <ImMenu fontSize={40} cursor={"pointer"} onClick={handleToggle} />}
                </div>
            </div>

            {/* mobile menu */}
            {toggle && (
                <div className="md:hidden text-2xl text-center flex flex-col">
                    <ul>
                        {NavbarElements.map((item, idx) => (
                            <li key={idx} className="mb-4">
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
                </div>
            )}
        </div>
    );
};

export default Navbar;
