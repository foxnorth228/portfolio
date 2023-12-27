import React from 'react';
import { Link } from 'react-scroll';
import './style.scss';

const NavLinks = () => {
  return (
    <>
      <Link
        href="#section_skills"
        className="navLink"
        to="section_skills"
        smooth="easeInOutQuad"
        duration={1200}
      >
        Skills
      </Link>
      <Link
        href="#section_projects"
        className="navLink"
        to="section_projects"
        smooth="easeInOutQuad"
        duration={1600}
      >
        Projects
      </Link>
      <Link
        href="#section_contacts"
        className="navLink"
        to="section_contacts"
        smooth="easeOutQuad"
        duration={2000}
      >
        Contacts
      </Link>
    </>
  );
};

export default NavLinks;
