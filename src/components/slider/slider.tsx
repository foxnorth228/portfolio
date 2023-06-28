import React, { useCallback, useRef, useState } from 'react';
import './slider.scss';
import './slider_arrows.scss';

interface IProject {
  src: string;
  filetype: string;
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
  const isAnimAllowed = useRef(true);
  const animationCount = useRef<Array<number>>([]);

  const [isMoveLeft, setisMoveLeft] = useState(-1);
  const [currLeftPos, setCurrLeftPos] = useState('-100%');
  const [currTransition, setCurrTransition] = useState('left 1.6s ease-out');

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
      animationCount.current.shift();
      setCurrTransition('left 1.4s ease-out');
      setCurrLeftPos(num === 1 ? '0%' : '-100%');
    },
    [animationCount]
  );

  const registerSlideAnimation = useCallback(
    (startPos: string, animRotation: number) => {
      if (
        (animRotation === 1 && indexCurrElem.current === 0) ||
        (animRotation === -1 && indexCurrElem.current === elems.length - 1)
      ) {
        return;
      }
      animationCount.current.push(animRotation);
      if (!isAnimAllowed.current) {
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
  const [moveType, staticType] =
    isMoveLeft === 1 ? [el.filetype, prevElem.filetype] : [prevElem.filetype, el.filetype];
  return (
    <div className="slider">
      <h2 className="slider__title">{el.title}</h2>
      <div onClick={() => registerSlideAnimation('-100%', 1)} className="arrow arrow__left" />
      <div className="slider__imageBlock">
        <img
          onTransitionEnd={() => {
            isAnimAllowed.current = true;
            if (animationCount.current.length > 0) {
              const animRotation = animationCount.current.shift() ?? 1;
              const startPos = animRotation === 1 ? '-100%' : '0%';
              setTimeout(() => registerSlideAnimation(startPos, animRotation), 40);
            }
          }}
          style={{ left: currLeftPos, transition: currTransition }}
          className="slider__nextimage"
          loading="lazy"
          alt="animation-slide"
          src={`${moveImg}-1920.${moveType}`}
          srcSet={`${staticImg}-500.${staticType} 480w, ${staticImg}-800.${staticType} 768w, ${staticImg}-1200.${staticType} 1200w, ${staticImg}-1920.${staticType} 1920w`}
          sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, (max-width: 1200px) 1200px, (max-width: 1920px) 1920px"
        ></img>
        <img
          className="slider__image"
          loading="lazy"
          alt="static-slide"
          src={`${staticImg}-1920.${staticType}`}
          srcSet={`${staticImg}-500.${staticType} 480w, ${staticImg}-800.${staticType} 768w, ${staticImg}-1200.${staticType} 1200w, ${staticImg}-1920.${staticType} 1920w`}
          sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, (max-width: 1200px) 1200px, (max-width: 1920px) 1920px"
        ></img>
      </div>
      <div onClick={() => registerSlideAnimation('0%', -1)} className="arrow arrow__right" />
      <div className="slider__description">
        <h3 className="slider__descelem slider__desc">Description: {el.desc}</h3>
        <h3 className="slider__descelem slider__stack">Stack: {el.stack}</h3>
        <h3 className="slider__descelem slider__github">
          Github link: <a href={el.github}>{el.github}</a>
        </h3>
        <h3 className="slider__descelem slider__deploy">
          Deploy link: <a href={el.deploy}>{el.deploy}</a>
        </h3>
      </div>
    </div>
  );
};

export default Slider;
