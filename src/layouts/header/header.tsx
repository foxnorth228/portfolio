import React from 'react';
import './header.scss';
import Nav from '@components/nav/nav';
import Icon from '@components/icon/icon';
import Contacts from '@components/contacts/contacts';

const Header = () => {
  return (
    <header className="header">
      <Icon link="gitlogo.jpeg" className="icon_github" />
      <Nav />
      <Contacts />
    </header>
  );
};

export default Header;
