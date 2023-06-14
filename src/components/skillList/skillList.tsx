import React from 'react';
import './skillList.scss';

const SkillList = () => {
  const skill_list = [
    ['html.svg', 'html'],
    ['git.svg', 'git'],
    ['css.svg', 'css'],
    ['npm.svg', 'npm'],
    ['js.svg', 'javascript'],
    ['webpack.svg', 'webpack'],
    ['ts.svg', 'typescript'],
    ['sass.svg', 'SASS'],
    ['react.svg', 'react'],
  ];
  return (
    <div className="skillList">
      {skill_list.map((el, i) => (
        <figure key={i} className="skill">
          <img src={`skills/${el[0]}`} className="skill__image"></img>
          <figcaption className="skill__text">{el[1]}</figcaption>
        </figure>
      ))}
    </div>
  );
};

export default SkillList;
