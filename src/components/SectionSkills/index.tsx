import React from 'react';
import './style.scss';
import SkillList from '@components/SkillList';
import config from './config';

const SectionSkills = () => {
  return (
    <section id="section_skills" className="sectionSkills">
      <div className="sectionSkills__container">
        <h1 className="sectionSkills__title">{config.title}</h1>
        <SkillList />
      </div>
    </section>
  );
};

export default SectionSkills;
