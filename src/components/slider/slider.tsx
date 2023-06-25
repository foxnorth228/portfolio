import React, { useCallback, useRef, useState } from 'react';
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

interface IProjects {
  elems: IProject[];
}

const Slider = ({ elems }: IProjects) => {
  const indexPrevElem = useRef(0);
  const indexCurrElem = useRef(0);
  const [isMoveLeft, setisMoveLeft] = useState(-1);
  const [currLeftPos, setCurrLeftPos] = useState('-100%');
  const [currTransition, setCurrTransition] = useState('left 1.6s ease-out');
  const isAnimAllowed = useRef(true);
  const animationCount = useRef<Array<number>>([]);

  const changeCurrElem = useCallback(
    (type: number) => {
      const currIndex = indexCurrElem.current;
      indexPrevElem.current = currIndex;
      indexCurrElem.current = Math.min(Math.max(currIndex + type, 0), elems.length - 1);
    },
    [elems.length]
  );

  const startSlideAnimation = useCallback(
    (num: number) => {
      console.log(animationCount.current.length);
      animationCount.current.pop();
      console.log(animationCount.current.length);
      setCurrTransition('left 1.4s ease-out');
      setCurrLeftPos(num === 1 ? '0%' : '-100%');
      console.log(isAnimAllowed.current);
    },
    [animationCount]
  );

  const registerSlideAnimation = useCallback(
    (startPos: string, animRotation: number) => {
      animationCount.current.push(animRotation);
      console.log(isAnimAllowed.current);
      if (
        !isAnimAllowed.current ||
        (animRotation === 1 && indexCurrElem.current === 0) ||
        (animRotation === -1 && indexCurrElem.current === elems.length - 1)
      ) {
        return;
      }

      isAnimAllowed.current = false;
      changeCurrElem(-animRotation);
      setisMoveLeft(animRotation);
      setCurrTransition('');
      setCurrLeftPos(startPos);
      setTimeout(() => startSlideAnimation(animRotation), 40);
    },
    [animationCount, changeCurrElem, elems.length, startSlideAnimation]
  );

  const el = elems[indexCurrElem.current];
  const prevElem = elems[indexPrevElem.current];
  const [moveImg, staticImg] = isMoveLeft === 1 ? [el.src, prevElem.src] : [prevElem.src, el.src];
  return (
    <div className="slider">
      <h2 className="slider__title">{el.title}</h2>
      <div onClick={() => registerSlideAnimation('-100%', 1)} className="arrow arrow__left" />
      <div className="slider__imageBlock">
        <img
          onTransitionEnd={() => {
            console.log('transition end');
            isAnimAllowed.current = true;
            if (animationCount.current.length > 0) {
              const animRotation = animationCount.current.pop() ?? 1;
              const startPos = animRotation === 1 ? '-100%' : '0%';
              setTimeout(() => registerSlideAnimation(startPos, animRotation), 40);
            }
          }}
          style={{ left: currLeftPos, transition: currTransition }}
          className="slider__nextimage"
          src={`${moveImg}`}
        ></img>
        <img className="slider__image" src={`${staticImg}`}></img>
      </div>
      <div onClick={() => registerSlideAnimation('0%', -1)} className="arrow arrow__right" />
      <div className="slider__description">
        <h3 className="slider__descelem slider__desc">Description: {el.desc}</h3>
        <h3 className="slider__descelem slider__stack">Stack: {el.stack}</h3>
        <h3 className="slider__descelem slider__github">Github link: {el.github}</h3>
        <h3 className="slider__descelem slider__deploy">Deploy link: {el.deploy}</h3>
      </div>
    </div>
  );
};

export default Slider;
