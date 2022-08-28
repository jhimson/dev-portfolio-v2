import React from 'react';
import pic1 from '../assets/images/dev.png';
import '../App.css';

const ProjectCard = ({image, techList, title, description}) => {
  return (
    <div className="image relative w-4/12">
      <img src={pic1} alt="test" className="image__img w-full block" />
      <div className="image__overlay image__overlay--blur flex flex-col items-center justify-center absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.6)] opacity-0 hover:opacity-100 ease-in-out duration-300">
        <div className="img__title text-blue-400 text-[1em] font-bold">
          React, Redux, Express, MongoDB, Tailwindcss
        </div>
        <div className="img__sub_title text-white text-[2em] font-semibold">
          Devtability
        </div>
        <p className="image__description text-white text-sm mt-[1.5em] w-4/6">
          Devtability is an accountability app for Developers. This app will
          help developers in maintaining daily coding commitment. It was
          programmed to check the users if they haven't been coding each day.
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
