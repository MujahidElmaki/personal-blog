import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import FaGithub from 'react-icons/fa';
import { moon } from '../assets/maki2.jpg';
import Image from 'next/image';

const projectsList = [
  {
    name: 'Personal blog',
    slug: 'personal-blog',
    tagline: 'The source of this website.',

    url: 'https://mujahidelmaki.ca',

    description: ``,
  },

  {
    name: 'React Smooth Scroll',
    slug: 'react-smooth-scroll',
    tagline: 'Fully responsive react website',

    description: ``,
  },
  {
    name: 'Pig Game',
    slug: 'pig-game',
    tagline: '2 Player dice rolling game',

    description: ``,
  },
  {
    name: 'Guess my Number!',
    slug: 'guess-my-number',
    tagline: 'Everyone has done this game at least once in their career',

    description: ``,
  },
];

const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function getStars() {
      const repos = await fetch(
        'https://api.github.com/users/mujahidElmaki/repos?per_page=100'
      );

      return repos.json();
    }

    getStars()
      .then((data) => {
        setRepos(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <article>
        <header>
          <div className="container">
            <h1>Projects</h1>
            <p className="description">
              A few highlights of my projects. Demo&apos;s coming soon. You can
              view them all{' '}
              <Link href="https://github.com/MujahidElmaki">
                <a target="_blank">on GitHub</a>
              </Link>
              .
            </p>
          </div>
        </header>

        <section className="projects large container">
          {projectsList.map((project) => (
            <div className="project" key={project.name}>
              <h2>{project.name}</h2>
              {project.image && (
                <Image src={project.image} alt={project.name} />
              )}
              <div className="links tags">
                {project.writeup && (
                  <Link href={project.writeup}>Write-up</Link>
                )}
                <a
                  href={`https://github.com/MujahidElmaki/${project.slug}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Source
                </a>
                {project.url && (
                  <a href={project.url} target="_blank" rel="noreferrer">
                    Demo
                  </a>
                )}
              </div>
              <p className="description">{project.tagline}</p>
              <div className="stars">
                {repos.find((repo) => repo.name === project.slug) && (
                  <>
                    {/* <FaGithub /> */}
                    <span>
                      <a
                        href={`https://github.com/MujahidElmaki/${project.slug}/stargazers`}
                      >
                        {Number(
                          repos.find((repo) => repo.name === project.slug)
                            .stargazers_count
                        ).toLocaleString()}
                      </a>
                      {` stars on GitHub`}
                    </span>
                    <span></span>
                  </>
                )}
              </div>
            </div>
          ))}
        </section>
      </article>
    </>
  );
};

export default Projects;
