import React from 'react';
import './icon.scss';

interface IIcon {
  link: string;
  className: string;
}

const Icon = ({ link, className }: IIcon) => {
  return <div style={{ backgroundImage: `url(${link})` }} className={`icon ${className}`}></div>;
};

export default Icon;
