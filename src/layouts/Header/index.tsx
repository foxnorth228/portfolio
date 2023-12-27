import React from 'react';
import './style.scss';
import Nav from '@components/Nav';
import Icon from '@components/IconLink';
import ContactsConnect from '@components/ContactsConnect';

const Header = () => {
  return (
    <header className="header">
      <a href="https://github.com/foxnorth228" aria-label="programmist-github-link">
        <Icon link="gitlogo.webp" className="header__icon_github" />
      </a>
      <Nav />
      <ContactsConnect />
    </header>
  );
};

export default Header;
