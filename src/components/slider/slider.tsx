import React, { useReducer, useState } from 'react';
import './slider.scss';
import Project, { IProject } from '../project/project';

interface ISlider {
  elems: IProject[];
}
const Slider = ({ elems }: ISlider) => {
  const changeEl = (state: number, actions: number) => {
    setPrevEl(state);
    return Math.min(Math.max(state + actions, 0), elems.length - 1);
  };
  const [prevEl, setPrevEl] = useState(0);
  const [currentElem, setCurrentElem] = useReducer(changeEl, 0);
  console.log(prevEl, currentElem);
  return <Project el={elems[currentElem]} prevEl={elems[prevEl]} setEl={setCurrentElem} />;
};

export default Slider;
