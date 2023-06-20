import React from 'react';
import './contacts-footer.scss';
import Icon from '@components/icon/icon';

const ContactsFooter = () => {
  const links = [
    ['mailto:khitrii03@gmail.com', 'contacts/mail.svg', 'icon_main'],
    ['https://www.linkedin.com/in/alex-khitry-016687265', 'contacts/linked.svg', 'icon_linked'],
    ['https://t.me/foxnorth228', 'contacts/telega.svg', 'icon_telegram'],
    ['skype:cid.bd609d3ff0e2494c?userinfo', 'contacts/skype.svg', 'icon_telegram'],
    ['https://wa.me/375292677541', 'contacts/whatsapp.svg', 'icon_telegram'],
  ];
  return (
    <article className="contactsFooter">
      {links.map((el, i) => (
        <a key={i} href={el[0]} className="contactsFooter__link">
          <Icon link={el[1]} className={el[2]} />
        </a>
      ))}
    </article>
  );
};

export default ContactsFooter;
