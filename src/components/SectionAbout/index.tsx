import React from 'react';
import './style.scss';
import AuthorFace from '@components/AuthorFace';

const SectionAbout = () => {
  return (
    <section className="sectionAbout">
      <h1 className="sectionAbout__title">About me</h1>
      <AuthorFace />
    </section>
  );
};

export default SectionAbout;
