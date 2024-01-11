import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";

const SocialIcon = () => {
    return (
        <>
            <a
                className="hover:text-gray-700 ease-in duration-300 text-4xl"
                href="https://www.linkedin.com/in/sakibul-islam-5aa591269/"
                target="_blank"
            >
                <FaLinkedin />
            </a>
            <a
                className="hover:text-gray-700 ease-in duration-300 text-4xl"
                href="https://github.com/isakibul"
                target="_blank"
            >
                <FaGithub />
            </a>
            <a
                className="hover:text-gray-700 ease-in duration-300 text-4xl"
                href="https://wa.me/+8801780775100"
                target="_blank"
            >
                <FaSquareWhatsapp />
            </a>
        </>
    )
}

export default SocialIcon;