import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

import './nav.scss';
import './nav-menu.scss';

const Nav = () => {
  const maxwidth480 = '(max-width: 480px)';
  const [isMaxWidth480, setIsMaxWidth480] = useState(window.matchMedia(maxwidth480).matches);
  useEffect(() => {
    window.matchMedia(maxwidth480).addEventListener('change', (e) => setIsMaxWidth480(e.matches));
  }, []);
  return (
    <nav className="nav">
      {isMaxWidth480 ? (
        <label className="nav__menu">
          <input className="nav__menu_checkbox" type="checkbox" />
          <span className="nav__menu_title"></span>
          <div className="nav__manu_elems">
            <Link
              href="#section_skills"
              className="nav__link"
              to="section_skills"
              smooth="easeInOutQuad"
              duration={1800}
            >
              Skills
            </Link>
            <Link
              href="#section_projects"
              className="nav__link"
              to="section_projects"
              smooth="easeInOutQuad"
              duration={1600}
            >
              Projects
            </Link>
            <Link
              href="#section_contacts"
              className="nav__link"
              to="section_contacts"
              smooth="easeInOutQuad"
              offset={-200}
              duration={2000}
            >
              Contacts
            </Link>
          </div>
        </label>
      ) : (
        <>
          <Link
            href="#section_skills"
            className="nav__link"
            to="section_skills"
            smooth="easeInOutQuad"
            duration={1800}
          >
            Skills
          </Link>
          <Link
            href="#section_projects"
            className="nav__link"
            to="section_projects"
            smooth="easeInOutQuad"
            duration={1600}
          >
            Projects
          </Link>
          <Link
            href="#section_contacts"
            className="nav__link"
            to="section_contacts"
            smooth="easeInOutQuad"
            offset={-50}
            duration={2000}
          >
            Contacts
          </Link>
        </>
      )}
    </nav>
  );
};

export default Nav;
