import Head from 'next/head';
import { Post, PostCard, Categories, PostWidget, Footer } from '../components';
import Link from 'next/link';
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
                <h1>Hey, I&apos;m Mujahid.</h1>
                <p className="subtitle small">
                  I&apos;m a software developer in Ontario, Canada. I love
                  learning and sharing my experiences. This website is my
                  digital home, highlighting my journey over the years!
                </p>
              </div>
              <Image
                src={maki}
                alt="Me"
                className="main-image"
                height="400px"
                width="400px"
              />
            </div>
          </div>
        </header>
        <div className="container">
          <h2 className="main-header">
            <span>Latest Articles</span>
            <Link href="/blog">
              <a>View All</a>
            </Link>
          </h2>

          <div>
            {posts.map((post, index) => (
              <Post key={index} post={post.node} />
            ))}
          </div>

          <h2 className="main-header">
            <span>Highlights</span>
          </h2>
          <div>
            {posts.map((post, index) => (
              <Post key={index} post={post.node} />
            ))}
          </div>
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
