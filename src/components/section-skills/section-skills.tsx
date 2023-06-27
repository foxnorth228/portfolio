import React from 'react';
import './section-skills.scss';
import SkillList from '../skillList/skillList';

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
