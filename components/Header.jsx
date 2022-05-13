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
          <Link href="/">
            <a className="brand">
              <span>Mujahid Elmaki</span>
            </a>
          </Link>
        </nav>
        <div>
          <nav>
            {mainNavItems.map((item) => (
              <Link href={item.url} key={item.label}>
                <a activeClassName="active">
                  <div className="tooltip">{item.label}</div>
                </a>
              </Link>
            ))}
          </nav>
        </div>

        <div className="toolbar-section">
          <nav className="social-nav">
            <Link href="https://github.com/MujahidElmaki">
              <a target="_blank" rel="noreferrer" key="Github">
                <FaGithub />
              </a>
            </Link>
            <Link href="https://twitter.com/datboymaki">
              <a target="_blank" rel="noreferrer" key="Twitter">
                <FaTwitter />
              </a>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
