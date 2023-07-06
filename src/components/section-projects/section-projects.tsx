import React from 'react';
import './section-projects.scss';
import Slider from '@components/slider/slider';

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
  const projects = process.env.PROJECT_DATA;
  const separatedProjects = projects?.split('&');
  const separatedProjectData = separatedProjects?.map((el) => el.split('|'));
  const projectData: IProject[] = [];
  if (!separatedProjectData) {
    throw new Error('Bug with env');
  }
  try {
    for (const datapack of separatedProjectData) {
      projectData.push({
        src: datapack[0],
        filetype: datapack[1],
        title: datapack[2],
        desc: datapack[3],
        stack: datapack[4],
        github: datapack[5],
        deploy: datapack[6],
      });
    }
  } catch (err) {
    throw new Error('Bug with env');
  }

  return (
    <section id="section_projects" className="sectionProjects">
      <h1 className="sectionProjects__title">Projects</h1>
      <Slider elems={projectData} />
    </section>
  );
};

export default SectionProjects as React.ComponentType<unknown>;
