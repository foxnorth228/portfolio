import React from 'react';
import './footer.scss';
import ContactForm from '@components/contact-form/contact-form';
import ContactsFooter from '@components/contacts-footer/contacts-footer';

const Footer = () => {
  return (
    <footer className="footer">
      <ContactForm />
      <ContactsFooter />
      <div className="footer__blocks">
        <div className="footer__block footer__block1" />
        <div className="footer__block footer__block2" />
      </div>
    </footer>
  );
};

export default Footer;
