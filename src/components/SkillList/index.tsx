import React from 'react';
import './style.scss';
import config from './config';

const SkillList = () => {
  return (
    <div className="skillList">
      {config.skills.map(({ path, title, alt }, i) => (
        <figure key={i} className="skill">
          <img loading="lazy" alt={alt} src={path} className="skill__image"></img>
          <figcaption className="skill__text">{title}</figcaption>
        </figure>
      ))}
    </div>
  );
};

export default SkillList;
