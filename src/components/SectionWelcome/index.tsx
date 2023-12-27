import React from 'react';
import './style.scss';
import config from '@components/SectionWelcome/config.ts';

const SectionWelcome = () => {
  return (
    <section className="sectionWelcome">
      <article className="sectionWelcome__text">
        <h2 className="sectionWelcome__welcomeString">{config.title}</h2>
        <h1 className="sectinWelcome__description">{config.description}</h1>
      </article>
      <article className="sectionWelcome__pictureContainer">
        <img
          width="100%"
          height="100%"
          alt="programmer-picture"
          src="programmer-picture2.webp"
          className="sectionWelcome__picture"
        ></img>
      </article>
    </section>
  );
};

export default SectionWelcome;
