// == Import npm
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

// == Import
import '../style.scss';
import { squaresShrink, squaresGrow } from 'src/components/d_Illustrations/transitions';

const MoonRabbit = ({ kanjisArr, updateValueGlobal }) => {
  const classSquare = 'square';
  // z because the z-index of the main squares needs to be higher than the rest
  const z = 'mainSquare';
  // s for size
  const s = `${classSquare} ${classSquare}--size`;
  // I wanted to leave column and rows as is for comprehension purpose
  // but since I have loads of classes, I'd rather have very short names
  const y = `${classSquare} ${classSquare}--columnStart`;
  const x = `${classSquare} ${classSquare}--rowStart`;

  // I use 2 groups to keep a reference for the divs
  // one for the first animation where they all get reduced at the same time
  // GSAP needs individual arrays to figure out where their center is
  // the other to animate every time I answer a question
  const squareGroups = useRef({ planet: [], rabbit: [], moon: [] });
  const squareContainers = useRef([]);

  useEffect(() => {
    squaresShrink(squareGroups.current.planet);
  }, []);

  useEffect(() => {
    squaresGrow(squareContainers.current[kanjisArr.length - 1]);
  }, [kanjisArr]);

  const cRef = (e, group, groupNum) => {
    squareGroups.current[group].push(e);
    if (!squareContainers.current[groupNum]) {
      squareContainers.current[groupNum] = [];
    }
    squareContainers.current[groupNum].push(e);
  };

  return (
    <div className="moonRabbit__Planet">
      <div className={`${s}1 ${y}4 ${x}1`} ref={(e) => cRef(e, 'planet', 0)} style={{ backgroundColor: '#B6E7FF' }} />
      <div className={`${s}2 ${y}5 ${x}1`} ref={(e) => cRef(e, 'planet', 0)} style={{ backgroundColor: '#83D0F6' }} />
      <div className={`${s}3 ${y}2 ${x}2 ${z}`} ref={(e) => cRef(e, 'planet', 0)} style={{ backgroundColor: '#6DC7F4' }}>{kanjisArr[0] ? kanjisArr[0].kanji : ''}</div>
      <div className={`${s}1 ${y}1 ${x}4`} ref={(e) => cRef(e, 'planet', 0)} style={{ backgroundColor: '#60ACD2' }} />
      <div className={`${s}2 ${y}1 ${x}5`} ref={(e) => cRef(e, 'planet', 0)} style={{ backgroundColor: '#5897B7' }} />

      <div className={`${s}1 ${y}7 ${x}1`} ref={(e) => cRef(e, 'planet', 1)} style={{ backgroundColor: '#B6E7FF' }} />
      <div className={`${s}2 ${y}5 ${x}3`} ref={(e) => cRef(e, 'planet', 1)} style={{ backgroundColor: '#5AB2DE' }} />
      <div className={`${s}3 ${y}7 ${x}2 ${z}`} ref={(e) => cRef(e, 'planet', 1)} style={{ backgroundColor: '#58BDF0' }}>{kanjisArr[1] ? kanjisArr[1].kanji : ''}</div>
      <div className={`${s}1 ${y}10 ${x}4`} ref={(e) => cRef(e, 'planet', 1)} style={{ backgroundColor: '#6CC9F8' }} />
      <div className={`${s}2 ${y}9 ${x}5`} ref={(e) => cRef(e, 'planet', 1)} style={{ backgroundColor: '#4788A8' }} />

      <div className={`${s}1 ${y}1 ${x}7`} ref={(e) => cRef(e, 'planet', 2)} style={{ backgroundColor: '#35637A' }} />
      <div className={`${s}2 ${y}3 ${x}5`} ref={(e) => cRef(e, 'planet', 2)} style={{ backgroundColor: '#3D7E9E' }} />
      <div className={`${s}3 ${y}2 ${x}7 ${z}`} ref={(e) => cRef(e, 'planet', 2)} style={{ backgroundColor: '#1D4154' }}>{kanjisArr[2] ? kanjisArr[2].kanji : ''}</div>
      <div className={`${s}1 ${y}4 ${x}10`} ref={(e) => cRef(e, 'planet', 2)} style={{ backgroundColor: '#284A67' }} />
      <div className={`${s}2 ${y}5 ${x}9`} ref={(e) => cRef(e, 'planet', 2)} style={{ backgroundColor: '#203E4E' }} />

      <div className={`${s}1 ${y}7 ${x}10`} ref={(e) => cRef(e, 'planet', 3)} style={{ backgroundColor: '#284A67' }} />
      <div className={`${s}2 ${y}5 ${x}7`} ref={(e) => cRef(e, 'planet', 3)} style={{ backgroundColor: '#284F64' }} />
      <div className={`${s}3 ${y}7 ${x}7 ${z}`} ref={(e) => cRef(e, 'planet', 3)} style={{ backgroundColor: '#1D4154' }}>{kanjisArr[3] ? kanjisArr[3].kanji : ''}</div>
      <div className={`${s}1 ${y}10 ${x}7`} ref={(e) => cRef(e, 'planet', 3)} style={{ backgroundColor: '#35637A' }} />
      <div className={`${s}2 ${y}7 ${x}5`} ref={(e) => cRef(e, 'planet', 3)} style={{ backgroundColor: '#40728B' }} />

      <div className={`${s}2 ${y}5 ${x}5`} ref={(e) => cRef(e, 'planet', 3)} style={{ backgroundColor: '#48819D' }} />
    </div>
  );
};

MoonRabbit.propTypes = {
  kanjisArr: PropTypes.array,
  updateValueGlobal: PropTypes.func.isRequired,
};

MoonRabbit.defaultProps = {
  kanjisArr: [],
};

// == Export
export default MoonRabbit;
