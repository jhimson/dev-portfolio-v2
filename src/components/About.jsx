import React from 'react';
import Programmer from '../assets/images/programmer.png';

const About = () => {
  return (
    <div className="h-screen flex bg-black">
      <div className="info m-48 w-[48em] flex flex-col space-y-10">
        <div className="header text-gray-100 font-bold text-5xl">
          <h1>Hi, I'm Jhimson Pamisa</h1>
          <h1>I love to build amazing apps.</h1>
        </div>
        <div className="body">
          <p className="text-lg text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam maiores
            a quam eos tenetur, delectus magni obcaecati inventore? Voluptatum
            beatae ex consequuntur enim ea dolor vero aliquid doloremque
            possimus dolorum!
          </p>
        </div>

        <div className="footer flex text-gray-300 space-x-4">
          <button className="bg-blue-400 px-8 py-2 rounded font-semibold">
            Work With Me
          </button>
          <button className="bg-slate-800 px-8 py-2 rounded font-semibold">
            See My Past Work
          </button>
        </div>
      </div>

      <div className="image mt-20">
        <img src={Programmer} alt="" />
      </div>
    </div>
  );
};

export default About;
