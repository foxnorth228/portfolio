import React from 'react';
import './section-about.scss';
import AuthorFace from '@components/AuthorFace';

const SectionAbout = () => {
  return (
    <section className="sectionAbout">
      <h1 className="sectionAbout__title">About me</h1>
      <div className="sectionAbout__image">
        <AuthorFace />
      </div>
    </section>
  );
};

export default SectionAbout;
