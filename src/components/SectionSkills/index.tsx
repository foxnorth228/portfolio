import React from 'react';
import './style.scss';
import SkillList from '@components/SkillList';

const SectionSkills = () => {
  return (
    <section id="section_skills" className="sectionSkills">
      <div className="sectionSkills__block">
        <h1 className="sectionSkills__title">Skills</h1>
        <SkillList />
      </div>
    </section>
  );
};

export default SectionSkills;
