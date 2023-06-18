import React from 'react';
import './section-projects.scss';
import Slider from '@components/slider/slider';

const SectionProjects = () => {
  const projects = [
    {
      src: 'projects/green-api.png',
      title: 'Title',
      desc: 'description',
      stack: 'stack',
      github: 'github',
      deploy: 'deploy',
    },
    {
      src: 'projects/test-image.png',
      title: 'Title2',
      desc: 'description',
      stack: 'stack',
      github: 'github',
      deploy: 'deploy',
    },
    {
      src: 'projects/green-api.png',
      title: 'Title3',
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
