import React from 'react';

const Navbar = () => {
  return (
    <div className="w-full text-white p-8 flex justify-between items-center bg-slate-900">

      <div className="left-nav-items">
        <ul className="flex items-center space-x-8">
          <li className="font-bold text-2xl font-righteous tracking-widest hover:bg-slate-800 px-4 py-2 cursor-pointer rounded text-white">
            Jhimson Pamisa
          </li>
          <li className="font-righteous text-lg tracking-widest hover:bg-slate-800 px-4 py-2 cursor-pointer rounded text-gray-400 hover:text-white">
            Tech Skills
          </li>
          <li className="font-righteous text-lg tracking-widest hover:bg-slate-800 px-4 py-2 cursor-pointer rounded text-gray-400 hover:text-white">Projects</li>
        </ul>
      </div>

      <div className="right-nav-items">
        <ul className="flex items-end space-x-8">
          <li className="font-righteous text-lg tracking-widest hover:bg-slate-800 hover:text-white px-4 py-2 cursor-pointer rounded text-gray-400">Resume</li>
          <li className="font-righteous text-lg tracking-widest hover:bg-slate-800 hover:text-white px-4 py-2 cursor-pointer rounded text-gray-400">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
