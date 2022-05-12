import React from 'react';
import { FaTwitter } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import netlify from '../assets/nav-github.png';
import gatsby from '../assets/nav-github.png';
import github from '../assets/nav-github.png';

const madeWithLinks = [
  { url: 'https://github.com/MujahidElmaki', label: 'GitHub', icon: github },
];

const Footer = () => {
  return (
    <footer className="footer">
      <section>
        <nav>
          <span className="desktop-only">
            Made With {'<'}3 by Mujahid Elmaki.
          </span>
        </nav>
      </section>
    </footer>
  );
};

export default Footer;
