import React from 'react';
import projectData from "./ProjectData";
import { TiArrowRightThick } from "react-icons/ti";

const Projects = () => {
    return (
        <div className="mt-48 px-10 md:px-30 lg:px-40">
            <p className="text-4xl font-semibold">Projects</p>
            <div className='mt-20 rounded-md'>
                {projectData.map((project, idx) => (
                    <div key={idx} className='flex flex-col mb-20 shadow-md md:flex-row'>
                        <div>
                            <img src={project.image} alt="" className="w-full h-full md:w-4/5 rounded-t-md md:rounded-s-md" />
                        </div>
                        <div className='p-5 text-center md:text-start flex flex-col items-center md:items-start md:justify-center'>
                            <p className='text-3xl font-semibold mb-2 text-gray-900'>{project.title}</p>
                            <p className='w-full text-xl text-gray-700'>{project.description}</p>
                            <div className='flex justify-center gap-5 my-3'>
                                {project.technologies.map((technology, index) => (
                                    <p key={index} className='px-5 py-2 bg-gray-100 rounded-md shadow-2xl text-xl'>{technology}</p>
                                ))}
                            </div>
                            <div className='flex justify-center gap-5'>
                                <a href={project.github} target='_blank' className='text-xl font-semibold py-3 px-7 outline outline-2 outline-blue-500 rounded-lg hover:bg-gray-200 ease-in duration-300'>Github</a>
                                <a href={project.demo} target='_blank' className='flex items-center text-xl font-semibold py-3 px-7 bg-blue-500 text-white rounded-lg hover:bg-blue-600 ease-in duration-300'>
                                    Demo
                                    <TiArrowRightThick className='ms-1' />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects;