import React from 'react';
import Image from 'next/image'; // supportts static site generation with next.js
const Author = ({ author }) => {
  return (
    <div className="container">
      <div>
        <Image
          alt={author.name}
          unoptimized
          height="100px"
          width="100px"
          className="align-middle rounded-full"
          src={author.photo.url}
        />
      </div>
    </div>
  );
};

export default Author;
