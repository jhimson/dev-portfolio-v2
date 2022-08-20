import React from 'react';

const Navbar = () => {
  return (
    <div className="w-full bg-[#191919] text-white p-8 flex justify-between items-center">
      
      <div className="left-nav-items">
        <ul className="flex items-end space-x-8">
          <li className="font-bold text-2xl font-righteous tracking-widest">
            Jhimson Pamisa
          </li>
          <li className="font-righteous text-lg tracking-widest">
            Tech Skills
          </li>
          <li className="font-righteous text-lg tracking-widest">Projects</li>
        </ul>
      </div>

      <div className="right-nav-items">
        <ul className="flex items-end space-x-8">
          <li className="font-righteous text-lg tracking-widest">Resume</li>
          <li className="font-righteous text-lg tracking-widest">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
