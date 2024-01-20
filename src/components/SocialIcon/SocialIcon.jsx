import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";


const socialIconData = [
    {
        id: 1,
        icon: <FaLinkedin />,
        link: "https://www.linkedin.com/in/sakibul-islam-5aa591269/"
    },
    {
        id: 2,
        icon: <FaGithub />,
        link: "https://github.com/isakibul"
    },
    {
        id: 3,
        icon: <FaSquareWhatsapp />,
        link: "https://wa.me/+8801780775100"
    }
]


const SocialIcon = () => {
    return (
        <>
            {socialIconData.map((icon) =>
                <a
                    key={icon.id}
                    className="text-white hover:text-gray-400 ease-in duration-300 text-4xl"
                    href={icon.link}
                    target="_blank"
                >
                    {icon.icon}
                </a>)}
        </>
    )
}

export default SocialIcon;