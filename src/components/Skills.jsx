import React from 'react';
import ProjectCard from './ProjectCard';

const Skills = () => {
  return (
    <div className="h-screen flex bg-black justify-center">
      <div className="flex flex-col items-center space-y-8 mt-48">
        <h1>
          {/* <svg
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
          </svg> */}
          <svg
            className="h-14 w-14 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
            ></path>
          </svg>
        </h1>
        <div className="header text-center w-[48em]">
          <h1 className="text-gray-100 font-bold text-5xl">
            Skills & Technologies
          </h1>
          <p className="text-lg text-gray-400 mt-8 mb-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
            asperiores repellendus illum amet eaque maxime porro veniam velit
            alias, autem cumque animi, exercitationem error consequuntur. Itaque
            in labore at tenetur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
