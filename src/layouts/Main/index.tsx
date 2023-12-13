import React, { Suspense } from 'react';
import SectionWelcome from '@components/SectionWelcome';
import SectionAbout from '@components/SectionAbout';
import SectionSkills from '@components/SectionSkills';

const SectionProjects = React.lazy(
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  () => import('@components/SectionProjects')
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
