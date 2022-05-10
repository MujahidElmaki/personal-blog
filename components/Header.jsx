import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from '../services';
import Image from 'next/image';

import { Hamburger } from '../assets/Hamburger';
import blog from '../assets/nav-blog.png';
import floppy from '../assets/nav-floppy.png';
import github from '../assets/nav-github1.png';
import projects from '../assets/nav-projects.png';
import twitter from '../assets/twitter2.png';
import { FaTwitter, FaGithub } from 'react-icons/fa';

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
    <header className="navigation">
      <div className="navigation-inner">
        <nav className="brand-section">
          <button
            className="desktop-only collapse-button"
            title="Collapse Sidebar"
          >
            <Hamburger />
          </button>

          <Link href="/" className="brand">
            <span className="whitespace-nowrap text-base font-semibold cursor-pointer">
              Mujahid Elmaki
            </span>
          </Link>
        </nav>
        <div className="mt-10">
          <nav>
            <ul className="inline grid grid-cols-3">
              {mainNavItems.map((item) => (
                <>
                  <li activeClassName="" key={item.label}>
                    <Link href={item.url}>
                      <a>{item.label}</a>
                    </Link>
                  </li>
                </>
              ))}
            </ul>
          </nav>
        </div>

        <div className="toolbar-section">
          <nav className="social-nav">
            <a
              href="https://github.com/MujahidElmaki"
              target="_blank"
              rel="noreferrer"
              key="Github"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/datboymaki"
              target="_blank"
              rel="noreferrer"
              key="Twitter"
            >
              <FaTwitter />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
