import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SocialIcon = () => {
    return (
        <>
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
        </>
    )
}

export default SocialIcon;