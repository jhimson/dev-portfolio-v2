import React from 'react';

const Projects = () => {
  return (
    <div className="h-screen flex bg-black justify-center">
      <div className='flex flex-col items-center space-y-8'>
        <h1 className="text-white">
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
        </h1>
        <div className="header text-gray-100 font-bold text-5xl">
          <h1>Apps I've Built</h1>
        </div>
      </div>
    </div>
  );
};

export default Projects;
