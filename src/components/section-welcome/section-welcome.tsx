import React from 'react';
import './section-welcome.scss';

const SectionWelcome = () => {
  return (
    <section className="sectionWelcome">
      <div className="sectionWelcome__text">
        <p className="sectionWelcome__welcomeString">Welcome to my portfolio!</p>
        <h1 className="sectinWelcome__description">{"Hi! I'm  junior frontend react developer"}</h1>
      </div>
      <div className="sectionWelcome__pictureContainer">
        <img
          width="100%"
          height="100%"
          alt="programmer-picture"
          src="programmer-picture.webp"
          className="sectionWelcome__picture"
        ></img>
      </div>
    </section>
  );
};

export default SectionWelcome;
