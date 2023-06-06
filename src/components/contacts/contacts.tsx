import React from 'react';
import './contacts.scss';
import Icon from '@components/icon/icon';

const Contacts = () => {
  return (
    <article className="contacts">
      <Icon link="mail.svg" className="icon_main" />
      <Icon link="linked.svg" className="icon_linked" />
      <Icon link="telega.svg" className="icon_telegram" />
      <Icon link="skype.svg" className="icon_telegram" />
      <Icon link="whatsapp.svg" className="icon_telegram" />
      <button className="contacts__button">{"Let's connect"}</button>
    </article>
  );
};

export default Contacts;
