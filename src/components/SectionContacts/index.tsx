import React from 'react';
import './style.scss';
import ContactForm from '@components/ContactsForm';
import ContactsLinks from '@components/ContactsLinks';

const SectionContacts = () => {
  return (
    <div id="section_contacts" className="section_contacts">
      <ContactForm />
      <ContactsLinks />
    </div>
  );
};

export default SectionContacts;
