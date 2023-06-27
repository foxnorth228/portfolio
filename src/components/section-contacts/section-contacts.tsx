import React from 'react';
import './section-contacts.scss';
import ContactForm from '@components/contact-form/contact-form';
import ContactsFooter from '@components/contacts-footer/contacts-footer';

const SectionContacts = () => {
  return (
    <div id="section_contacts" className="section_contacts">
      <ContactForm />
      <ContactsFooter />
    </div>
  );
};

export default SectionContacts;
