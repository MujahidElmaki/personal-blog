import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';
const Post = ({ post, hideDate, yearOnly }) => {
  const date = new Date(post.createdAt);
  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
  let isNew = false;

  if (date > oneMonthAgo) {
    // Setting 'New post!' functionality
    isNew = true;
  }

  let formattedDate = moment(post.createdAt).format('MMM DD');

  let formattedYear = moment(post.createdAt).format('YYYY');
  console.log(post);
  return (
    <Link href={`/post/${post.slug}`}>
      <a className={isNew ? 'post new' : 'post'}>
        <span className="flex" style={{ alignItems: 'center' }}>
          <h3>{post.title} </h3>
          <span className="new-badge">{isNew && 'New!'}</span>
        </span>
        <div>
          {formattedDate && !hideDate && (
            <time>{yearOnly ? formattedYear : formattedDate}</time>
          )}
        </div>
      </a>
    </Link>
  );
};

export default Post;
