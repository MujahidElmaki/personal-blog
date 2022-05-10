import Head from 'next/head';
import { PostCard, Categories, PostWidget, Footer } from '../components';
import Link from 'react';
import maki from '../assets/maki2.jpg';
import { getPosts } from '../services';
import { FeaturedPosts } from '../sections';
import Image from 'next/image';

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Mujahid Elmaki</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <FeaturedPosts /> */}
      <article className="hero">
        <header>
          <div className="container">
            <div className="flex-content">
              <div>
                <h1>Hey, I'm Mujahid.</h1>
                <p className="subtitle small">
                  I'm a software developer in Ontario, Canada. I love learning
                  and sharing my experiences, this website is my digital home.
                  Highlighting my journey over the years!
                </p>
              </div>
              <Image
                src={maki}
                alt="Me"
                className="main-image"
                height="250px"
                width="300px"
              />
            </div>
          </div>
        </header>
        <div className="container">
          <h2 className="main-header">
            <span>Latest Articles</span>
          </h2>
          <div>
            <div>
              {posts.map((post) => (
                <li>{post.title}</li>
              ))}
            </div>
          </div>

          <h2 className="main-header">
            <span>Highlights</span>
          </h2>
          <FeaturedPosts />
        </div>
      </article>
    </>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
