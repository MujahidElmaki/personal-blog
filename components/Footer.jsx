import React from 'react';
import { FaTwitter } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import netlify from '../assets/nav-github.png';
import gatsby from '../assets/nav-github.png';
import github from '../assets/nav-github.png';
const links = [
  { url: 'https://taniarascia.substack.com/subscribe', label: 'Newsletter' },
  { url: 'https://ko-fi.com/taniarascia', label: 'Ko-Fi' },
  { url: 'https://patreon.com/taniarascia', label: 'Patreon' },
  { url: 'https://www.taniarascia.com/rss.xml', label: 'RSS' },
];
const madeWithLinks = [
  { url: 'https://www.gatsbyjs.org/', label: 'Gatsby', icon: gatsby },
  { url: 'https://github.com/taniarascia', label: 'GitHub', icon: github },
  { url: 'https://www.netlify.com', label: 'Netlify', icon: netlify },
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
