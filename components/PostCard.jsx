import React from 'react';
import moment from 'moment';
import Link from 'next/link';

const PostCard = ({ post }) => {
  console.log(post);
  return (
    <section>
      <div className="posts">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>

        <span>{moment(post.createdAt).format('MMM DD, YYYY')}</span>
      </div>
    </section>
  );
};

export default PostCard;
