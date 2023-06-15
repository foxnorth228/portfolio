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
    <div>
      <img src={`projects/${el.src}`}></img>
    </div>
  );
};

export default Project;
