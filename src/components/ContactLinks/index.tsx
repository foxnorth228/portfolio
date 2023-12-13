import React from 'react';
import './style.scss';
import Icon from '@components/IconLink';
import { scroller } from 'react-scroll';

const Contacts = ({ isButton }: { isButton: boolean }) => {
  const links = [
    ['mailto:khitrii03@gmail.com', 'ContactLinks/mail.svg', 'icon_main', 'programmist-mail-link'],
    [
      'https://www.linkedin.com/in/alex-khitry-016687265',
      'ContactLinks/linked.svg',
      'icon_linked',
      'programmist-linkedin-link',
    ],
    [
      'https://t.me/foxnorth228',
      'ContactLinks/telega.svg',
      'icon_telegram',
      'programmist-telegram-link',
    ],
    [
      'skype:cid.bd609d3ff0e2494c?userinfo',
      'ContactLinks/skype.svg',
      'icon_telegram',
      'programmist-skype-link',
    ],
    [
      'https://wa.me/375292677541',
      'ContactLinks/whatsapp.svg',
      'icon_telegram',
      'programmist-whatsapp-link',
    ],
  ];
  return (
    <article className="contacts">
      {links.map((el, i) => (
        <a aria-label={el[3]} key={i} href={el[0]} className="contacts__link">
          <Icon link={el[1]} className={el[2]} />
        </a>
      ))}
      {isButton && (
        <button
          onClick={() => {
            scroller.scrollTo('ContactForm', {
              duration: 2000,
              smooth: 'easeInOutQuad',
              offset: 100,
            });
          }}
          className="contacts__button"
        >
          {"Let's connect"}
        </button>
      )}
    </article>
  );
};

export default Contacts;
