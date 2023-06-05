import React from 'react';
import './header.scss';
import Nav from '@components/nav/nav';
import Icon from '@components/icon/icon';

const Header = () => {
  return (
    <header>
      <Icon />
      <Nav />
    </header>
  );
};

export default Header;
