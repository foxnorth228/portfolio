import React from 'react';
import './style.scss';
import Icon from '@components/IconLink';
import links from '@config/links.ts';

const ContactsLinks = () => {
  return (
    <article className="contactsLinks">
      {links.map(({ link, iconPath, label }, i) => (
        <a aria-label={label} key={i} href={link} className="contactsLinks__link">
          <Icon link={iconPath} />
        </a>
      ))}
    </article>
  );
};

export default ContactsLinks;
