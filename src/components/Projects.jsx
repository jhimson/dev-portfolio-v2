import React from 'react';
import ProjectCard from './ProjectCard';

//! Images
import devtability from '../assets/images/devtability.gif';
import thehood from '../assets/images/thehood.gif';
import tasty from '../assets/images/tasty.gif';
import trivia from '../assets/images/trivia.gif';

const Projects = () => {
  return (
    <div className="h-auto flex bg-black justify-center py-14">
      <div className="flex flex-col items-center space-y-8">
        <h1>
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
        <div className="header text-center w-[48em]">
          <h1 className="text-gray-100 font-bold text-5xl">Apps I've Built</h1>
          <p className="text-lg text-gray-400 mt-8 mb-10">
            After my journey being a self taught developer and my time attending
            the Software engineering immersive bootcamp at General Assembly. I
            have built these amazing apps that I am proud of. My goal is to
            build applications that are useful to the community, and it makes me
            happy to know that people are using the apps that I built.
          </p>
        </div>

        <div className="Projects grid grid-cols-2 justify-items-center gap-y-14 mx-[8em]">
          <ProjectCard title={'Devtability'} image={devtability} />
          <ProjectCard
            title={'TheHood - Stock Investment Tracker'}
            image={thehood}
          />
          <ProjectCard title={'Tasty - Recipe Search App'} image={tasty} />
          <ProjectCard title={'Trivia Quiz App'} image={trivia} />
          {/* <div className="Projects flex items-center justify-center space-x-12"> */}
          {/* <ProjectCard />
          <ProjectCard />
        </div>
        <div className='Projects flex items-center justify-center space-x-12'>
          <ProjectCard />
          <ProjectCard /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
