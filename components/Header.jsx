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
          {/* <button
            className="desktop-only collapse-button"
            title="Collapse Sidebar"
          >
            <Hamburger />
          </button> */}

          <a href="/" className="brand">
            <span>Mujahid Elmaki</span>
          </a>
        </nav>
        <div>
          <nav>
            {mainNavItems.map((item) => (
              <a href={item.url} key={item.label} activeClassName="active">
                <Image src={item.icon} alt={item.label} />
                <div className="tooltip">{item.label}</div>
              </a>
            ))}
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
