import React, { useState } from 'react';
import './slider.scss';
import Project, { IProject } from '../project/project';

interface ISlider {
  elems: IProject[];
}
const Slider = ({ elems }: ISlider) => {
  const [currentElem, setCurrentElem] = useState(0);
  return <Project el={elems[currentElem]} />;
};

export default Slider;
