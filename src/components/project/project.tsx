import React, { useCallback, useRef, useState } from 'react';
import './project.scss';
import './project_arrows.scss';

export interface IProject {
  src: string;
  title: string;
  desc: string;
  stack: string;
  github: string;
  deploy: string;
}

interface IProjects {
  el: IProject;
  prevEl: IProject;
  setEl: React.Dispatch<number>;
}

const Project = ({ el, prevEl, setEl }: IProjects) => {
  const refMoveImg = useRef<HTMLImageElement>(null);
  const refImg = useRef<HTMLImageElement>(null);
  const [moveLeft, setMoveLeft] = useState(0);

  const sliderImgLeft = useCallback(() => {
    console.log(el.src, prevEl.src);
    refMoveImg!.current!.classList.add('project__previmage_active');
  }, [el.src, prevEl.src]);
  const sliderImgRight = useCallback(() => {
    console.log(el.src, prevEl.src);
    refMoveImg!.current!.classList.add('project__nextimage_active');
  }, [el.src, prevEl.src]);

  let moveImg = '';
  let staticImg = '';
  switch (moveLeft) {
    case 1:
      moveImg = el.src;
      staticImg = prevEl.src;
      break;
    case -1:
      moveImg = prevEl.src;
      staticImg = el.src;
      break;
    default:
      moveImg = prevEl.src;
      staticImg = el.src;
      break;
  }

  return (
    <div className="project">
      <h2 className="project__title">{el.title}</h2>
      <div
        onClick={() => {
          refMoveImg!.current!.classList.remove('project__previmage_active');
          refMoveImg!.current!.classList.remove('project__nextimage_active');
          setEl(-1);
          setMoveLeft(1);
          window.setTimeout(() => sliderImgLeft(), 0);
        }}
        className="arrow arrow__left"
      />
      <div className="project__imageBlock">
        <img ref={refMoveImg} className="project__nextimage" src={`${moveImg}`}></img>
        <img ref={refImg} className="project__image" src={`${staticImg}`}></img>
      </div>
      <div
        onClick={() => {
          refMoveImg!.current!.classList.remove('project__previmage_active');
          refMoveImg!.current!.classList.remove('project__nextimage_active');
          setEl(1);
          setMoveLeft(-1);
          window.setTimeout(() => sliderImgRight(), 0);
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

export default Project;
