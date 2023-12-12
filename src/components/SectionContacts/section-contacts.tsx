import React from 'react';
import './section-contacts.scss';
import ContactForm from '@components/ContactForm/contact-form';
import ContactsFooter from '@components/ContactsFooter/contacts-footer';

const SectionContacts = () => {
  return (
    <div id="section_contacts" className="section_contacts">
      <ContactForm />
      <ContactsFooter />
    </div>
  );
};

export default SectionContacts;
