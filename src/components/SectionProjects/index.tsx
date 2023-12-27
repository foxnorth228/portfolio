import React from 'react';
import './style.scss';
import Slider from '@components/Slider';
import projects from '@src/config/projects.ts';

const SectionProjects = () => {
  return (
    <section id="section_projects" className="sectionProjects">
      <h1 className="sectionProjects__title">Projects</h1>
      <Slider elems={projects} />
    </section>
  );
};

export default SectionProjects as React.ComponentType<unknown>;
