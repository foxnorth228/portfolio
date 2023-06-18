import React from 'react';
import './footer.scss';
import ContactForm from '@components/contact-form/contact-form';
import Contacts from '@components/contacts/contacts';

const Footer = () => {
  return (
    <footer className="footer">
      <ContactForm />
      <Contacts isButton={false} />
    </footer>
  );
};

export default Footer;
