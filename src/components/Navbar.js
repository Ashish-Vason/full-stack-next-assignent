import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-[#f9fbf980] px-36 flex justify-between items-center">
      <div className="logo py-4">
        <Image
          src="https://cdn.prod.website-files.com/66dab781497d9a528975cd7a/66daf9668236041a506e46d7_Logo.svg"
          alt="brand-logo"
          width={200}
          height={200}
        />
      </div>
      <div className="navlinks">
        <ul className="list-none flex items-center space-x-8">
          <li className="py-4 cursor-pointer hover:text-gray-600 transition">
            Unlisted Shares
          </li>
          <li className="py-4 cursor-pointer hover:text-gray-600 transition">
            Our Blogs
          </li>
          <li className="py-4 cursor-pointer hover:text-gray-600 transition">
            Contact Us
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
