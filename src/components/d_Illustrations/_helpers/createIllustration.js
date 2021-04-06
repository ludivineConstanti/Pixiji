// == Import npm
import React from 'react';

import MainSquare from 'src/components/d_Illustrations/_elements/MainSquare';
import Square from 'src/components/d_Illustrations/_elements/Square';

const cRef = (e, groupIndex, groupNum, squareGroups, squareContainers) => {
  squareGroups.current[groupIndex].push(e);
  if (!squareContainers.current[groupNum]) {
    squareContainers.current[groupNum] = [];
  }
  squareContainers.current[groupNum].push(e);
};

export default (data, groupIndex, squareGroups, squareContainers, numPreviousGroups = 0) => {
  const formattedData = [];
  let counter = 0;
  for (let i = 0; i < data.length; i += 1) {
    // eslint-disable-next-line no-loop-func
    data[i].forEach((square) => {
      counter += 1;
      if (square.main) {
        formattedData.push(<MainSquare
          key={`mainSquare${counter}__${groupIndex}`}
          size={square.s}
          columnStart={square.column}
          rowStart={square.row}
          ref={(e) => cRef(e, groupIndex, numPreviousGroups + i, squareGroups, squareContainers)}
          color={square.c}
          kanjiIndex={numPreviousGroups + i}
          bottom={square.bottom || false}
        />);
      }
      else {
        formattedData.push(<Square
          key={`square${counter}__${groupIndex}`}
          size={square.s}
          columnStart={square.column}
          rowStart={square.row}
          ref={(e) => cRef(e, groupIndex, numPreviousGroups + i, squareGroups, squareContainers)}
          color={square.c}
          kanjiIndex={numPreviousGroups + i}
        />);
      }
    });
  }
  return formattedData;
};
