import React from 'react';
import Vector1 from '@assets/vector1.svg';
import './authorFace.scss';

//add floating
const AuthorFace = () => {
  return (
    <figure className="authorFace">
      <Vector1 className="authorFace__icon" />
      <figcaption className="authorFace__text">
        {
          "Hi! I am Alexander Khitry, 20 years old, frontend developer (React.js).  \
          I am fourth-year student in BSUIR, my specialization connected with computer science. \
          When I was 18 yo I tried myself in creating sites for a first time and was very excited about it. \
          I worked a lot to dig in frontend development, finished some courses. \
          I don't stop there and continue learning something new. \
          I enjoy creating websites according to all modern quality standards. \
          My typical stack is React, Typescript, Sass, Webpack. \
          In current time I haven't work experience in this sphere, but I am working on some pet projects to hone my skills"
        }
      </figcaption>
    </figure>
  );
};

export default AuthorFace;
