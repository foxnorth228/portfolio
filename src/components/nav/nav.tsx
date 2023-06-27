import React, { useEffect, useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

import './nav.scss';

const Nav = () => {
  const maxwidth480 = '(max-width: 480px)';
  const [isMaxWidth480, setIsMaxWidth480] = useState(window.matchMedia(maxwidth480).matches);
  useEffect(() => {
    window.matchMedia(maxwidth480).addEventListener('change', (e) => setIsMaxWidth480(e.matches));
  }, []);
  return (
    <nav className="nav">
      {isMaxWidth480 ? (
        <p className="nav__menu">Menu</p>
      ) : (
        <>
          <Link className="nav__link" to="section_projects" smooth="easeInOutQuad" duration={1600}>Projects</Link>
          <Link className="nav__link" to="section_skills" smooth="easeInOutQuad" duration={1800}>Skills</Link>
          <Link className="nav__link" to="section_contacts" smooth="easeInOutQuad" offset={-200} duration={2000}>
            Contacts
          </Link>
        </>
      )}
    </nav>
  );
};

export default Nav;
