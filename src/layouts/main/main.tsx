import React, { Suspense } from 'react';
import './main.scss';
import SectionWelcome from '@components/section-welcome/section-welcome';
import SectionAbout from '@components/section-about/section-about';
import SectionSkills from '@components/section-skills/section-skills';

const SectionProjects = React.lazy(
  () => import('../../components/section-projects/section-projects.tsx')
);
const Main = () => {
  return (
    <main>
      <SectionWelcome />
      <SectionAbout />
      <SectionSkills />
      <Suspense fallback={<h2 className="slider">Loading slider...</h2>}>
        <SectionProjects />
      </Suspense>
    </main>
  );
};

export default Main;
