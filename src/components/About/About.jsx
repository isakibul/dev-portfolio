import aboutData from "./AboutData";

const About = () => {
    return (
        <div
            className="mt-32 md:mt-48 px-4 md:px-30 lg:px-40" id="about"
        >
            <h1
                className="text-3xl md:text-4xl font-semibold underline"
            >
                About Me
            </h1>
            <div
                className="mt-10 md:mt-20 py-10 px-4 md:py-20 md:px-32 text-sm md:text-xl shadow-2xl text-justify"
            >
                <p
                    className="md:tracking-wide"
                >
                    Hello! My name is <strong>Sakibul Islam</strong>. I'am from Bogura, Bangladesh. Iam a Computer science student and a web application developer. I have gained a lot of knowledge in the filed of web development during previous couple years.
                </p>
                <br />
                <p
                    className="md:tracking-wide"
                >
                    My journey into the world of technology began with a strong passion for working with computer technologies, which led me to pursue the Computer Science program.
                </p>
                <br />
                <p
                    className="md:tracking-wide"
                >
                    I have a lot of web technologies in previous couple years. And I always love to work with those technologies. Despite its challenges, I always enjoy learning new technologies.
                </p>
                <br />

                {/* technologies */}
                <div>
                    <strong>I have become confident using the following technologies:</strong>
                    <div
                        className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
                    >
                        {aboutData.map((data, idx) => (
                            <div
                                className="flex flex-col items-center mt-10"
                                key={idx}
                            >
                                <img
                                    className="w-10 mb-2"
                                    src={data.icon}
                                    alt={data.title}
                                />
                                <p
                                    className="font-bold text-gray-700"
                                >
                                    {data.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About