import React from 'react';
import './main.scss';
import SectionWelcome from '@components/section-welcome/section-welcome';
import SectionAbout from '@components/section-about/section-about';

const Main = () => {
  return (
    <main>
      <SectionWelcome />
      <SectionAbout />
    </main>
  );
};

export default Main;
