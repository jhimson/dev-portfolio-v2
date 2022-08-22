import React from 'react';
import pic1 from '../assets/images/dev.png';
import "../App.css";

const ProjectCard = () => {
  return (
    <div className="image relative w-[400px]">
      <img src={pic1} alt="test" className="image__img w-full block" />
      <div className="image__overlay image__overlay--blur flex flex-col items-center justify-center absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.6)] opacity-0 hover:opacity-100 ease-in-out duration-300">
        <div className="img__title text-blue-400 text-[1em] font-bold">
          React, Redux, MongoDB
        </div>
        <div className="img__sub_title text-white text-[2em] font-semibold">
          Devtability
        </div>
        <p className="image__description text-white text-sm mt-[0.5em]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque sit eum ratione
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
