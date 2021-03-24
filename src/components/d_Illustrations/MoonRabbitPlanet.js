// == Import npm
import React, { useEffect, useRef } from 'react';
// import PropTypes from 'prop-types';

// == Import
import './style.scss';
import { squaresShrink, squaresGrow } from 'src/components/d_Illustrations/transitions';

const MoonRabbitPlanet = () => {
  const classMain = 'moonRabbitPlanet';
  const classSquare = 'square';
  // z because the z-index of the main squares needs to be higher than the rest
  const z = 'mainSquare';
  // s for size
  const s = `${classSquare} ${classSquare}--size`;
  // I wanted to leave column and rows as is for comprehension purpose
  // but since I have loads of classes, I'd rather have very short names
  const y = `${classSquare} ${classSquare}--columnStart`;
  const x = `${classSquare} ${classSquare}--rowStart`;

  const g = useRef({ g1: [] });

  useEffect(() => {
    squaresShrink(g.current.g1);

    document.addEventListener('click', () => {
      squaresGrow('.group1');
    });
  }, []);

  return (
    <div className={classMain}>
      <div className={`${s}1 ${y}4 ${x}1`} ref={(e) => g.current.g1.push(e)} style={{ backgroundColor: '#B6E7FF' }} />
      <div className={`${s}2 ${y}5 ${x}1`} ref={(e) => g.current.g1.push(e)} style={{ backgroundColor: '#83D0F6' }} />
      <div className={`${s}3 ${y}2 ${x}2 ${z}`} ref={(e) => g.current.g1.push(e)} style={{ backgroundColor: '#6DC7F4' }}>月</div>
      <div className={`${s}1 ${y}1 ${x}4`} ref={(e) => g.current.g1.push(e)} style={{ backgroundColor: '#60ACD2' }} />
      <div className={`${s}2 ${y}1 ${x}5`} ref={(e) => g.current.g1.push(e)} style={{ backgroundColor: '#5897B7' }} />

      <div className={`${s}1 ${y}7 ${x}1`} style={{ backgroundColor: '#B6E7FF' }} />
      <div className={`${s}2 ${y}5 ${x}3`} style={{ backgroundColor: '#5AB2DE' }} />
      <div className={`${s}3 ${y}7 ${x}2 ${z}`} style={{ backgroundColor: '#58BDF0' }}>月</div>
      <div className={`${s}1 ${y}10 ${x}4`} style={{ backgroundColor: '#6CC9F8' }} />
      <div className={`${s}2 ${y}9 ${x}5`} style={{ backgroundColor: '#4788A8' }} />

      <div className={`${s}1 ${y}1 ${x}7`} style={{ backgroundColor: '#35637A' }} />
      <div className={`${s}2 ${y}3 ${x}5`} style={{ backgroundColor: '#3D7E9E' }} />
      <div className={`${s}3 ${y}2 ${x}7 ${z}`} style={{ backgroundColor: '#1D4154' }}>月</div>
      <div className={`${s}1 ${y}4 ${x}10`} style={{ backgroundColor: '#284A67' }} />
      <div className={`${s}2 ${y}5 ${x}9`} style={{ backgroundColor: '#203E4E' }} />

      <div className={`${s}1 ${y}7 ${x}10`} style={{ backgroundColor: '#284A67' }} />
      <div className={`${s}2 ${y}5 ${x}7`} style={{ backgroundColor: '#284F64' }} />
      <div className={`${s}3 ${y}7 ${x}7 ${z}`} style={{ backgroundColor: '#1D4154' }}>月</div>
      <div className={`${s}1 ${y}10 ${x}7`} style={{ backgroundColor: '#35637A' }} />
      <div className={`${s}2 ${y}7 ${x}5`} style={{ backgroundColor: '#40728B' }} />

      <div className={`${s}2 ${y}5 ${x}5`} style={{ backgroundColor: '#48819D' }} />
    </div>
  );
};

// == Export
export default MoonRabbitPlanet;
