import { MdCopyAll } from "react-icons/md";

const Contact = () => {
    const copyToClipboard = () => {
        navigator.clipboard.writeText("isakibul@gmail.com");
    };
    return (
        <div className="mt-48 px-10 pb-32 md:px-30 lg:px-40">
            <p className="text-4xl font-semibold">Contact</p>
            <div className="mt-20 flex flex-col md:flex-row md:justify-between md:px-40 md:py-20 gap-4 text-center p-5 shadow-2xl">
                <div className="flex flex-col items-center gap-4 md:flex-row">
                    <p className="md:text-xl">isakibul108@gmail.com</p>
                    <button
                        className="text-3xl md:text-4xl"
                        onClick={copyToClipboard}
                    >
                        <MdCopyAll />
                    </button>
                </div>
                <a
                    href="mailto:isakibul@gmail.com"
                    className="bg-blue-500 text-white text-xl font-semibold py-4 px-6 rounded-lg hover:bg-blue-600 ease-in duration-300 cursor-pointer"
                >
                    Send Email
                </a>
            </div>
        </div>
    )
}

export default Contact