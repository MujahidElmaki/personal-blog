import React from 'react';
import moment from 'moment';
import { isTypeSystemDefinitionNode } from 'graphql';

const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text; // saving the text

    if (obj) {
      // modifying the correct content based on its object, bold, italic, underlines
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    // checking for different types
    switch (type) {
      case 'heading-three':
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case 'paragraph':
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case 'heading-four':
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };
  return (
    <div className="container">
      <div>
        <img className="image" src={post.featuredImage.url} alt={post.title} />
      </div>
      <div>
        <div className="flex">
          <span style={{ paddingBottom: '20px' }}>
            {moment(post.createdAt).format('MMM DD, YYYY')}
          </span>
        </div>
        <h1 className="header">{post.title}</h1>
        {/* Looping over content to see what type its made of  */}
        {post.content.raw.children.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemIndex) =>
            getContentFragment(itemIndex, item.text, item)
          );

          return getContentFragment(index, children, typeObj, typeObj.type);
        })}
      </div>
    </div>
  );
};

export default PostDetail;
