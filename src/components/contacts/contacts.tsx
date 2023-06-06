import React from 'react';
import './contacts.scss';
import Icon from '@components/icon/icon';

const Contacts = () => {
  const links = [
    ['mailto:khitrii03@gmail.com', 'mail.svg', 'icon_main'],
    ['https://www.linkedin.com/in/alex-khitry-016687265', 'linked.svg', 'icon_linked'],
    ['https://t.me/foxnorth228', 'telega.svg', 'icon_telegram'],
    ['skype:cid.bd609d3ff0e2494c?userinfo', 'skype.svg', 'icon_telegram'],
    ['https://wa.me/375292677541', 'whatsapp.svg', 'icon_telegram'],
  ];
  return (
    <article className="contacts">
      {links.map((el, i) => (
        <a key={i} href={el[0]} className="contacts__link">
          <Icon link={el[1]} className={el[2]} />
        </a>
      ))}
      <button className="contacts__button">{"Let's connect"}</button>
    </article>
  );
};

export default Contacts;
