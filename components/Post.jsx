import React from 'react';
import Image from 'next/image';

export const Post = ({ node, query, prefix, hideDate, yearOnly }) => {
  const date = new Date(node.date);
  return <div>Post</div>;
};
