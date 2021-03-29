// == Import npm
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

// == Import
import '../style.scss';
import MainSquare from 'src/components/d_Illustrations/_elements/MainSquare';
import Square from 'src/components/d_Illustrations/_elements/Square';
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
      <Square size={1} columnStart={4} rowStart={1} ref={(e) => cRef(e, 'planet', 0)} color="#B6E7FF" />
      <Square size={2} columnStart={5} rowStart={1} ref={(e) => cRef(e, 'planet', 0)} color="#83D0F6" />
      <MainSquare size={3} columnStart={2} rowStart={2} ref={(e) => cRef(e, 'planet', 0)} color="#6DC7F4" kanjiIndex={0} />
      <Square size={1} columnStart={1} rowStart={4} ref={(e) => cRef(e, 'planet', 0)} color="#60ACD2" />
      <Square size={2} columnStart={1} rowStart={5} ref={(e) => cRef(e, 'planet', 0)} color="#5897B7" />

      <div className={`${s}1 ${y}7 ${x}1`} ref={(e) => cRef(e, 'planet', 1)} style={{ backgroundColor: '#B6E7FF' }} />
      <div className={`${s}2 ${y}5 ${x}3`} ref={(e) => cRef(e, 'planet', 1)} style={{ backgroundColor: '#5AB2DE' }} />
      <MainSquare size={3} columnStart={7} rowStart={2} ref={(e) => cRef(e, 'planet', 1)} color="#58BDF0" kanjiIndex={1} />
      <div className={`${s}1 ${y}10 ${x}4`} ref={(e) => cRef(e, 'planet', 1)} style={{ backgroundColor: '#6CC9F8' }} />
      <div className={`${s}2 ${y}9 ${x}5`} ref={(e) => cRef(e, 'planet', 1)} style={{ backgroundColor: '#4788A8' }} />

      <div className={`${s}1 ${y}1 ${x}7`} ref={(e) => cRef(e, 'planet', 2)} style={{ backgroundColor: '#35637A' }} />
      <div className={`${s}2 ${y}3 ${x}5`} ref={(e) => cRef(e, 'planet', 2)} style={{ backgroundColor: '#3D7E9E' }} />
      <MainSquare size={3} columnStart={2} rowStart={7} ref={(e) => cRef(e, 'planet', 2)} color="#1D4154" kanjiIndex={2} />
      <div className={`${s}1 ${y}4 ${x}10`} ref={(e) => cRef(e, 'planet', 2)} style={{ backgroundColor: '#284A67' }} />
      <div className={`${s}2 ${y}5 ${x}9`} ref={(e) => cRef(e, 'planet', 2)} style={{ backgroundColor: '#203E4E' }} />

      <div className={`${s}1 ${y}7 ${x}10`} ref={(e) => cRef(e, 'planet', 3)} style={{ backgroundColor: '#284A67' }} />
      <div className={`${s}2 ${y}5 ${x}7`} ref={(e) => cRef(e, 'planet', 3)} style={{ backgroundColor: '#284F64' }} />
      <MainSquare size={3} columnStart={7} rowStart={7} ref={(e) => cRef(e, 'planet', 3)} color="#1D4154" kanjiIndex={3} />
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

const dataDivs = [
  {
    squareContainer: 'planet',
    squareGroups: [
      [{
        s: 1, y: 4, x: 1, c: '#B6E7FF',
      }, {
        s: 1, y: 4, x: 1, c: '#B6E7FF',
      }, {
        s: 1, y: 4, x: 1, c: '#B6E7FF',
      }, {
        s: 1, y: 4, x: 1, c: '#B6E7FF',
      }, {
        s: 1, y: 4, x: 1, c: '#B6E7FF',
      }],
      [{
        s: 1, y: 4, x: 1, c: '#B6E7FF',
      }, {
        s: 1, y: 4, x: 1, c: '#B6E7FF',
      }, {
        s: 1, y: 4, x: 1, c: '#B6E7FF',
      }, {
        s: 1, y: 4, x: 1, c: '#B6E7FF',
      }, {
        s: 1, y: 4, x: 1, c: '#B6E7FF',
      }],
      [{
        s: 1, y: 4, x: 1, c: '#B6E7FF',
      }, {
        s: 1, y: 4, x: 1, c: '#B6E7FF',
      }, {
        s: 1, y: 4, x: 1, c: '#B6E7FF',
      }, {
        s: 1, y: 4, x: 1, c: '#B6E7FF',
      }, {
        s: 1, y: 4, x: 1, c: '#B6E7FF',
      }],
      [{
        s: 1, y: 4, x: 1, c: '#B6E7FF',
      }, {
        s: 1, y: 4, x: 1, c: '#B6E7FF',
      }, {
        s: 1, y: 4, x: 1, c: '#B6E7FF',
      }, {
        s: 1, y: 4, x: 1, c: '#B6E7FF',
      }, {
        s: 1, y: 4, x: 1, c: '#B6E7FF',
      }],
      [{
        s: 1, y: 4, x: 1, c: '#B6E7FF',
      }, {
        s: 1, y: 4, x: 1, c: '#B6E7FF',
      }, {
        s: 1, y: 4, x: 1, c: '#B6E7FF',
      }, {
        s: 1, y: 4, x: 1, c: '#B6E7FF',
      }, {
        s: 1, y: 4, x: 1, c: '#B6E7FF',
      }]],
  }];
