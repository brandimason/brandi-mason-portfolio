import React from 'react';

function NavBar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-black p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">Portfolio</span>
      </div>
      <div className="flex-grow flex items-center w-auto">
        <div className="text-sm flex-grow">
            <a href="#home" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500 mr-4">
                Home
            </a>  
            <a href="#about" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500 mr-4">
                About
            </a>
            <a href="#skills" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500 mr-4">
                Skills
            </a>
            <a href="#projects" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500 mr-4">
                Projects
            </a>
            <a href="#blogs" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500 mr-4">
                Blogs
            </a>
            <a href="#contact" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500 mr-4">
                Contact
            </a>
        </div>
      </div>
    </nav>
  )
};

export default NavBar