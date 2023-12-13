import React from 'react';
import Vector1 from '@assets/vector1.svg';
import './style.scss';
import config from './config';

const AuthorFace = () => {
  return (
    <figure className="authorFace">
      <Vector1 className="authorFace__icon" />
      <figcaption className="authorFace__text">
        {config.description}
        <a href={config.link} target="_blank" rel="noreferrer">
          {config.linkTitle}
        </a>
      </figcaption>
    </figure>
  );
};

export default AuthorFace;
