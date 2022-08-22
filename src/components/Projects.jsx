import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div className="h-screen flex bg-black justify-center">
      <div className="flex flex-col items-center space-y-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-14 w-14 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
        <div className="header text-center w-[32em]">
          <h1 className="text-gray-100 font-bold text-5xl">Apps I've Built</h1>
          <p className="text-lg text-gray-400 mt-8 mb-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
            asperiores repellendus illum amet eaque maxime porro veniam velit
            alias, autem cumque animi, exercitationem error consequuntur. Itaque
            in labore at tenetur.
          </p>
        </div>

        <div className="Projects flex items-center justify-center gap-x-8">
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  );
};

export default Projects;
