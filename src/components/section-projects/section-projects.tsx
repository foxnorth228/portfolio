import React from 'react';
import './section-projects.scss';
import Slider from '@components/slider/slider';
import projects from '@src/config/projects.ts';

export interface IProject {
  src: string;
  filetype: string;
  title: string;
  desc: string;
  stack: string;
  github: string;
  deploy: string;
}

const SectionProjects = () => {
  return (
    <section id="section_projects" className="sectionProjects">
      <h1 className="sectionProjects__title">Projects</h1>
      <Slider elems={projects} />
    </section>
  );
};

export default SectionProjects as React.ComponentType<unknown>;
