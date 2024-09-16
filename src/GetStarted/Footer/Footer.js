import React from 'react';
import { MdOutlineTranslate } from 'react-icons/md';
import { IoMdArrowDropdown } from 'react-icons/io';
const Footer = () => {
  // Array of link text for easy mapping
  const links = [
    "FAQ", "Help Centre", "Account",
    "Media Centre", "Investor Relations", "Jobs",
    "Ways to Watch", "Terms of Use", "Privacy",
    "Cookie Preferences", "Corporate Information", "Contact Us",
    "Speed Test", "Legal Notices", "Only on Netflix"
  ];

  // Divide links into 3 columns of 5 rows each
  const columns = [links.slice(0, 5), links.slice(5, 10), links.slice(10)];

  return (
    <footer className=" text-gray-400 py-8">
      <div className="container mx-auto px-4">
        {/* Contact Information */}
        <div className="mb-8 text-white">
          <p className="text-lg">Questions? Call 000-800-919-1694</p>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          {columns.map((column, colIndex) => (
            <div key={colIndex} className="flex flex-col space-y-2">
              {column.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href="#"
                  className="hover:text-white"
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className='p-8'>
      <button className='border-2 py-0 font-bold gap-1 flex items-center justify-center border-white bg-transparent' >
       <span><MdOutlineTranslate /></span>   English
       <span><IoMdArrowDropdown /></span>

            </button>

            <h1 className='py-5'>NetFlix India</h1>
      </div>
    </footer>
  );
};

export default Footer;
