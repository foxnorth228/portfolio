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
          alt="programmer-picture"
          src="programmer-picture.png"
          className="sectionWelcome__picture"
        ></img>
      </div>
    </section>
  );
};

export default SectionWelcome;
