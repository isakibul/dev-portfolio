import projectData from "./ProjectData";
import { TiArrowRightThick } from "react-icons/ti";

const Projects = () => {
    return (
        <div
            className="mt-32 md:mt-48 px-4 md:px-30 lg:px-40 text-white"
            id="projects"
        >
            <p
                className="text-3xl md:text-4xl font-semibold underline"
            >
                Projects
            </p>

            {/* project card */}
            <div
                className='mt-10 md:mt-20'
            >
                {projectData.map((project, idx) => (
                    <div
                        key={idx}
                        className='flex flex-col md:flex-row mb-20 shadow-lg bg-[#0a122e] outline outline-1 outline-gray-800'
                    >
                        <div
                            className='md:w-1/2'
                        >
                            <img
                                src={project.image}
                                alt="" className="w-full h-full"
                            />
                        </div>
                        <div
                            className='p-5 text-center md:text-start flex flex-col items-center md:items-start md:justify-center md:w-1/2'
                        >
                            <p
                                className='text-3xl font-bold mb-2 font-righteous'
                            >
                                {project.title}
                            </p>
                            <p
                                className='w-full md:text-xl'
                            >
                                {project.description}
                            </p>
                            <div
                                className='flex justify-center gap-3 my-5'
                            >
                                {project.technologies.map((technology, index) => (
                                    <p
                                        key={index}
                                        className='px-2 md:px-4 py-1 md:py-2 outline outline-1 outline-[#773EEA] rounded-md shadow-2xl text-xs md:text-sm lg:text-base'
                                    >
                                        {technology}
                                    </p>
                                ))}
                            </div>
                            <div
                                className='flex justify-center gap-6 mt-2'
                            >
                                <a
                                    href={project.github}
                                    target='_blank'
                                    className='text-xl flex items-center font-semibold py-2 md:py-3 px-5 md:px-7 bg-[#773EEA] hover:bg-[#692ce6] ease-in duration-300 rounded-lg'
                                >
                                    Github
                                </a>
                                <a
                                    href={project.demo}
                                    target='_blank'
                                    className='flex items-center text-xl font-semibold py-2 md:py-4 px-5 md:px-7 text-white rounded-lg bg-[#773EEA] hover:bg-[#692ce6] ease-in duration-300'
                                >
                                    Demo
                                    <TiArrowRightThick className='ms-1' />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
                {/* project card end */}
            </div>
        </div>
    );
}

export default Projects;
