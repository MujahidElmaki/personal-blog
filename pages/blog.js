import React, { useMemo } from 'react';
import Link from 'next/link';
import { Post, PostCard, Categories, PostWidget, Footer } from '../components';
import { getPosts } from '../services';

export default function Blog({ posts }) {
  return (
    <>
      <article className="blog-page">
        <header>
          <div className="container">
            <h1>Articles</h1>
            <p className="description">
              Tutorials, technical articles, snippets, reference materials, and
              all development-related resources I&apos;ve written.
            </p>
          </div>
        </header>

        <div className="container">
          <h2 className="main-header">2022</h2>
          {posts.map((post, index) => (
            <Post key={index} post={post.node} />
          ))}
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
