import React, { useEffect, useState } from 'react';
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
          <p className="nav__link">Home</p>
          <p className="nav__link">Projects</p>
          <p className="nav__link">Skills</p>
        </>
      )}
    </nav>
  );
};

export default Nav;
