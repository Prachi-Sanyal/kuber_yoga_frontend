import React, { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { navigation } from '../data';

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer text-4xl text-heading ml-[10px] lg:hidden"
      >
        <BiMenu />
      </div>
      <ul
        className={`${
          isOpen ? 'max-h-[300px] p-8' : 'max-h-0 p-0'
        } flex flex-col absolute w-full bg-white top-24 left-0 shadow-primary space-y-6 overflow-y-auto transition-all`}
        style={{
          scrollbarWidth: 'thin', // For Firefox
          scrollbarColor: 'rgba(0, 0, 0, 0.2) transparent', // For Firefox
        }}
      >
        {navigation.map((item, index) => {
          return (
            <li key={index} className="py-2 px-4">
              <a href={item.href}>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMobile;
