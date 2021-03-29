// == Import npm
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

// == Import
import '../style.scss';
import MainSquare from 'src/components/d_Illustrations/_elements/MainSquare';
import Square from 'src/components/d_Illustrations/_elements/Square';
import { squaresShrink, squaresGrow } from 'src/components/d_Illustrations/transitions';
import planet from './_data/planet';

const MoonRabbit = ({ kanjisArr, updateValueGlobal }) => {
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

  const createIllustration = (data) => {
    const formattedData = [];
    for (let i = 0; i < data.length; i += 1) {
      data[i].forEach((square) => {
        if (square.main) {
          formattedData.push(<MainSquare size={square.s} columnStart={square.column} rowStart={square.row} ref={(e) => cRef(e, 'planet', i)} color={square.c} kanjiIndex={i} />);
        }
        else {
          formattedData.push(<Square size={square.s} columnStart={square.column} rowStart={square.row} ref={(e) => cRef(e, 'planet', i)} color={square.c} />);
        }
      });
    }
    return formattedData;
  };

  const planetFormatted = createIllustration(planet);

  return (
    <div className="moonRabbit__Planet">
      {planetFormatted}
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
