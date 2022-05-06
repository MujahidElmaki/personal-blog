import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from '../services';
import Image from 'next/image';

import blog from '../assets/nav-blog.png';
import floppy from '../assets/nav-floppy.png';
import github from '../assets/nav-github.png';
import projects from '../assets/nav-projects.png';
import twitter from '../assets/nav-twitter.png';

const mainNavItems = [
  { url: '/blog', icon: blog, label: 'Articles' },
  { url: '/projects', icon: projects, label: 'Projects' },
  { url: '/me', icon: floppy, label: 'About me' },
];

const socialNavItems = [
  { url: 'https://github.com/MujahidElmaki', icon: github, label: 'GitHub' },
  { url: 'https://twitter.com/datboymaki', icon: twitter, label: 'Twitter' },
];

const Header = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className=" top-0 left-0 w-full bg-gray-200 border-b border-black h-16 z-9 mb-10 border border-red-300">
      <div className="flex m-auto items-center px-2 py-6 h-full justify-between max-w-max border border-red-300 ">
        <nav className="justify-start flex-none m-3 border border-red-300">
          <button></button>
          <Link href="/">
            <span className="whitespace-nowrap text-base font-semibold cursor-pointer">
              Mujahid Elmaki
            </span>
          </Link>
        </nav>

        <div className="flex items-center ">
          <nav className="p-10">
            <ul className="inline grid grid-cols-3">
              {mainNavItems.map((item) => (
                <>
                  <li key={item.label}>
                    <Image
                      src={item.icon}
                      alt={item.label}
                      height="20px"
                      width="20px"
                    />
                    <Link href={item.url}>
                      <a>{item.label}</a>
                    </Link>
                  </li>
                </>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex items-center justify-end grow-0 shrink-0 basis-42">
          <nav>
            {socialNavItems.map((item) => (
              <a
                className="p-1"
                href={item.url}
                target="_blank"
                rel="noreferrer"
                key={item.label}
              >
                <Image
                  src={item.icon}
                  alt={item.label}
                  height="20px"
                  width="20px"
                />
              </a>
            ))}
          </nav>
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default Header;
