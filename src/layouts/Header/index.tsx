import React from 'react';
import './style.scss';
import Nav from '@components/Nav';
import Icon from '@components/IconLink';
import Contacts from '@components/ContactLinks';

const Header = () => {
  return (
    <header className="header">
      <a href="https://github.com/foxnorth228" aria-label="programmist-github-link">
        <Icon link="gitlogo.webp" className="icon_github" />
      </a>
      <Nav />
      <Contacts isButton={true} />
    </header>
  );
};

export default Header;
