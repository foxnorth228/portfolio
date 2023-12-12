import React, { Suspense } from 'react';
import SectionWelcome from '@components/SectionWelcome/section-welcome';
import SectionAbout from '@components/SectionAbout/section-about';
import SectionSkills from '@components/SectionSkills/section-skills';

const SectionProjects = React.lazy(
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  () => import('@components/SectionProjects/section-projects.tsx')
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
