import { MdCopyAll } from "react-icons/md";
import SocialIcon from "../SocialIcon/SocialIcon";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const notify = () => toast("Email copied!");

    const copyToClipboard = () => {
        navigator.clipboard.writeText("isakibul@gmail.com");
    };

    const handleCopy = () => {
        copyToClipboard();
        notify();
    }
    return (
        <div
            className="mt-32 md:mt-48 px-4 pb-60 md:px-30 lg:px-40 text-white"
            id="contact"
        >
            <p
                className="text-3xl md:text-4xl font-semibold underline"
            >
                Get In Touch
            </p>
            <div
                className="mt-6 md:mt-12 flex flex-col md:flex-row md:justify-between md:px-32 md:py-20 gap-4 text-center p-5 bg-[#0a122e] shadow-2xl"
            >
                <div
                    className="flex flex-col items-center gap-4 md:flex-row"
                >
                    <p
                        className="text-xl md:text-2xl"
                    >
                        isakibul108@gmail.com
                    </p>
                    <button
                        className="text-3xl md:text-4xl"
                        onClick={handleCopy}
                    >
                        <MdCopyAll />
                    </button>
                    <ToastContainer />
                </div>
                <a
                    href="mailto:isakibul@gmail.com"
                    className="text-white text-xl font-semibold py-4 px-6 rounded-lg bg-[#773EEA] hover:bg-[#692ce6] ease-in duration-300 cursor-pointer"
                >
                    Send Email
                </a>
            </div>
            <div
                className="flex flex-row mt-12 gap-6 justify-center text-5xl text-gray-500 lg:hidden"
            >
                <SocialIcon />
            </div>
        </div >
    )
}

export default Contact