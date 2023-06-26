import React from 'react';
import './main.scss';
import SectionWelcome from '@components/section-welcome/section-welcome';
import SectionAbout from '@components/section-about/section-about';
import SectionSkills from '@components/section-skills/section-skills';
import SectionProjects from '@components/section-projects/section-projects';

const Main = () => {
  return (
    <main>
      <SectionWelcome />
      <SectionAbout />
      <SectionSkills />
      <SectionProjects />
    </main>
  );
};

export default Main;
