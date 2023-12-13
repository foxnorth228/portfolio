import React from 'react';
import './style.scss';
import SectionContacts from '@components/SectionContacts';

const Footer = () => {
  return (
    <footer className="footer">
      <SectionContacts />
      <div className="footer__blocks">
        <div className="footer__block footer__block1" />
        <div className="footer__block footer__block2" />
      </div>
    </footer>
  );
};

export default Footer;
