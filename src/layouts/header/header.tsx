import React from 'react';
import './header.scss';
import Nav from '@components/nav/nav';
import Icon from '@components/icon/icon';
import Contacts from '@components/contacts/contacts';

const Header = () => {
  return (
    <header className="header">
      <a href="https://github.com/foxnorth228">
        <Icon link="gitlogo.jpeg" className="icon_github" />
      </a>
      <Nav />
      <Contacts isButton={true} />
    </header>
  );
};

export default Header;
