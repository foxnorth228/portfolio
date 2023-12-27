import React from 'react';
import './style.scss';
import AuthorFace from '@components/AuthorFace';
import config from './config';

const SectionAbout = () => {
  return (
    <section className="sectionAbout">
      <h1 className="sectionAbout__title">{config.title}</h1>
      <AuthorFace />
    </section>
  );
};

export default SectionAbout;
