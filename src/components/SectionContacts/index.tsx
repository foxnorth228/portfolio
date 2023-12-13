import React from 'react';
import './style.scss';
import ContactForm from '@components/ContactForm';
import ContactsFooter from '@components/ContactsFooter';

const SectionContacts = () => {
  return (
    <div id="section_contacts" className="section_contacts">
      <ContactForm />
      <ContactsFooter />
    </div>
  );
};

export default SectionContacts;
