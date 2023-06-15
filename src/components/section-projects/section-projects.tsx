import React from 'react';
import './section-projects.scss';
import Slider from '@components/slider/slider';

const SectionProjects = () => {
  const projects = [
    {
      src: 'green-api.png',
      title: 'title',
      desc: 'description',
      stack: 'stack',
      github: 'github',
      deploy: 'deploy',
    },
  ];
  return (
    <section className="sectionProjects">
      <h1 className="sectionProjects__title">Projects</h1>
      <Slider elems={projects} />
    </section>
  );
};

export default SectionProjects;
