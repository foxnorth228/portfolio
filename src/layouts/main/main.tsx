import React from 'react';
import './main.scss';
import SectionWelcome from '@components/section-welcome/section-welcome';
import SectionAbout from '@components/section-about/section-about';
import SectionSkills from '@src/components/section-skills/section-skills';

const Main = () => {
  return (
    <main>
      <SectionWelcome />
      <SectionAbout />
      <SectionSkills />
    </main>
  );
};

export default Main;
