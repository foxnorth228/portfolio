import React from 'react';

import './style.scss';
import NavLinks from '@components/NavLinks';
import useMatchMedia from '@hooks/useMatchMedia.ts';

const Nav = () => {
  const matches = useMatchMedia('(max-width: 480px)');
  return (
    <nav className="nav">
      {matches ? (
        <label className="nav__menu">
          <input className="nav__menu_checkbox" type="checkbox" />
          <span className="nav__menu_title"></span>
          <div className="nav__manu_elems">
            <NavLinks />
          </div>
        </label>
      ) : (
        <NavLinks />
      )}
    </nav>
  );
};

export default Nav;
