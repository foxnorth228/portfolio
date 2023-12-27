import React from 'react';
import './style.scss';
import config from './config';

const SkillList = () => {
  return (
    <div className="skillList">
      {config.skills.map(({ path, title }, i) => (
        <figure key={i} className="skill">
          <img
            loading="lazy"
            alt={`${title}-svg`}
            src={`skills/${path}`}
            className="skill__image"
          ></img>
          <figcaption className="skill__text">{title}</figcaption>
        </figure>
      ))}
    </div>
  );
};

export default SkillList;
