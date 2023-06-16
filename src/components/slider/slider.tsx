import React, { useState } from 'react';
import './slider.scss';
import Project, { IProject } from '../project/project';
import ArrowLeft from '@assets/arrow-left.svg';
import ArrowRight from '@assets/arrow-right.svg';

interface ISlider {
  elems: IProject[];
}
const Slider = ({ elems }: ISlider) => {
  const [currentElem, setCurrentElem] = useState(0);
  return (
    <div className="slider">
      <ArrowLeft className="arrow" />
      <Project el={elems[currentElem]} />
      <ArrowRight className="arrow" />
    </div>
  );
};

export default Slider;
