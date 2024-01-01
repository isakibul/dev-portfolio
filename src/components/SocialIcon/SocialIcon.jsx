import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SocialIcon = () => {
    return (
        <div
            className="flex justify-center flex-row mt-20 lg:mt-0 lg:flex-col lg:fixed lg:top-80 lg:left-10 gap-6 text-5xl text-gray-500"
        >
            <a
                className="hover:text-gray-700 ease-in duration-300"
                href="https://www.linkedin.com/in/sakibul-islam-5aa591269/"
            >
                <FaLinkedin />
            </a>
            <a
                className="hover:text-gray-700 ease-in duration-300"
                href="https://github.com/isakibul"
            >
                <FaGithub />
            </a>
        </div>
    )
}

export default SocialIcon;