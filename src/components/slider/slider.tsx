import React, { useCallback, useReducer, useState } from 'react';
import './slider.scss';
import './slider_arrows.scss';

interface IProject {
  src: string;
  title: string;
  desc: string;
  stack: string;
  github: string;
  deploy: string;
}

interface ISlider {
  elems: IProject[];
}

const Slider = ({ elems }: ISlider) => {
  const changeEl = (state: number, actions: number) => {
    setPrevEl(state);
    return Math.min(Math.max(state + actions, 0), elems.length - 1);
  };

  const [indexPrevElem, setPrevEl] = useState(0);
  const [indexCurrElem, setCurrentElem] = useReducer(changeEl, 0);
  const [moveLeft, setMoveLeft] = useState(-1);
  const [currLeft, setCurrLeft] = useState('-100%');
  const [currTrans, setCurrTrans] = useState('left 1.6s ease-out');

  const step = useCallback((num: number) => {
    console.log(num);
    setCurrTrans('left 1.6s ease-out');
    setCurrLeft(num === 1 ? '0%' : '-100%');
  }, []);

  const el = elems[indexCurrElem];
  const prevElem = elems[indexPrevElem];

  let moveImg = '';
  let staticImg = '';
  switch (moveLeft) {
    case 1:
      moveImg = el.src;
      staticImg = prevElem.src;
      break;
    case -1:
      moveImg = prevElem.src;
      staticImg = el.src;
      break;
    default:
      moveImg = prevElem.src;
      staticImg = el.src;
      break;
  }
  return (
    <div className="project">
      <h2 className="project__title">{el.title}</h2>
      <div
        onClick={() => {
          setCurrentElem(-1);
          setMoveLeft(1);
          setCurrTrans('');
          setCurrLeft('-100%');
          setTimeout(() => step(1), 0);
        }}
        className="arrow arrow__left"
      />
      <div className="project__imageBlock">
        <img
          style={{ left: currLeft, transition: currTrans }}
          className="project__nextimage"
          src={`${moveImg}`}
        ></img>
        <img className="project__image" src={`${staticImg}`}></img>
      </div>
      <div
        onClick={() => {
          setCurrentElem(1);
          setMoveLeft(-1);
          setCurrTrans('');
          setCurrLeft('0%');
          setTimeout(() => step(-1), 0);
        }}
        className="arrow arrow__right"
      />
      <div className="project__description">
        <h3 className="project__descelem project__desc">Description: {el.desc}</h3>
        <h3 className="project__descelem project__stack">Stack: {el.stack}</h3>
        <h3 className="project__descelem project__github">Github link: {el.github}</h3>
        <h3 className="project__descelem project__deploy">Deploy link: {el.deploy}</h3>
      </div>
    </div>
  );
};

export default Slider;
