import { MdCopyAll } from "react-icons/md";
import SocialIcon from "../SocialIcon/SocialIcon";

const Contact = () => {

    const copyToClipboard = () => {
        navigator.clipboard.writeText("isakibul@gmail.com");
    };

    return (
        <div
            className="mt-32 md:mt-48 px-10 pb-32 md:px-30 lg:px-40"
            id="contact"
        >
            <p
                className="text-3xl md:text-4xl font-semibold underline"
            >
                Get In Touch
            </p>
            <div
                className="mt-10 md:mt-20 flex flex-col md:flex-row md:justify-between md:px-32 md:py-20 gap-4 text-center p-5 shadow-2xl"
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
                        onClick={copyToClipboard}
                    >
                        <MdCopyAll />
                    </button>
                </div>
                <a
                    href="mailto:isakibul@gmail.com"
                    className="text-white text-xl font-semibold py-4 px-6 rounded-lg bg-[#3498db] hover:bg-blue-600 ease-in duration-300 cursor-pointer"
                >
                    Send Email
                </a>
            </div>
            <SocialIcon />
        </div>
    )
}

export default Contact