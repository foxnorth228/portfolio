import React from 'react';
import './project.scss';

export interface IProject {
  src: string;
  title: string;
  desc: string;
  stack: string;
  github: string;
  deploy: string;
}

const Project = ({ el }: { el: IProject }) => {
  return (
    <div className="project">
      <h2 className="project__title">{el.title}</h2>
      <img className="project__image" src={`projects/${el.src}`}></img>
      <div className="project__description">
        <h3 className="project__descelem project__desc">Description: {el.desc}</h3>
        <h3 className="project__descelem project__stack">Stack: {el.stack}</h3>
        <h3 className="project__descelem project__github">Github link: {el.github}</h3>
        <h3 className="project__descelem project__deploy">Deploy link: {el.deploy}</h3>
      </div>
    </div>
  );
};

export default Project;
