import React from 'react';
import projectData from "./ProjectData";
import { TiArrowRightThick } from "react-icons/ti";

const Projects = () => {
    return (
        <div
            className="mt-32 md:mt-48 px-4 md:px-30 lg:px-40"
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
                        className='flex flex-col md:flex-row mb-20 shadow-lg'
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
                                className='text-3xl font-bold mb-2 text-gray-900'
                            >
                                {project.title}
                            </p>
                            <p
                                className='w-full md:text-xl text-gray-700'
                            >
                                {project.description}
                            </p>
                            <div
                                className='flex justify-center gap-5 my-3'
                            >
                                {project.technologies.map((technology, index) => (
                                    <p
                                        key={index}
                                        className='px-4 md:px-5 py-1 md:py-2 bg-gray-100 rounded-md shadow-2xl text-xl'
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
                                    className='text-xl flex items-center font-semibold py-2 md:py-3 px-5 md:px-7 outline outline-2 outline-[#3498db] rounded-lg hover:bg-gray-200 ease-in duration-300'
                                >
                                    Github
                                </a>
                                <a
                                    href={project.demo}
                                    target='_blank'
                                    className='flex items-center text-xl font-semibold py-2 md:py-4 px-5 md:px-7 text-white rounded-lg bg-[#3498db] hover:bg-blue-600 ease-in duration-300'
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
