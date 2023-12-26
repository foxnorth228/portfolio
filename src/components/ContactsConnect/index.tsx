import React, { useCallback } from 'react';
import './style.scss';
import { scroller } from 'react-scroll';
import ContactsLinks from '@components/ContactsLinks';
import config from './config.ts';

const ContactsConnect = () => {
  const onClickButton = useCallback(() => {
    scroller.scrollTo(config.elementIdScrollTo, config.optionsScrollTo);
  }, []);

  return (
    <article className="contactsConnect">
      <ContactsLinks />
      <button onClick={onClickButton} className="contactsConnect__button">
        {config.buttonText}
      </button>
    </article>
  );
};

export default ContactsConnect;
