// == Import npm
import React from 'react';

import MainSquare from 'src/components/d_Illustrations/_elements/MainSquare';
import Square from 'src/components/d_Illustrations/_elements/Square';

const cRef = (e, group, groupNum, squareGroups, squareContainers) => {
  squareGroups.current[group].push(e);
  if (!squareContainers.current[groupNum]) {
    squareContainers.current[groupNum] = [];
  }
  squareContainers.current[groupNum].push(e);
};

export default (data, group, squareGroups, squareContainers, numPreviousGroups = 0) => {
  const formattedData = [];
  let counter = 0;
  for (let i = 0; i < data.length; i += 1) {
    data[i].forEach((square) => {
      counter += 1;
      if (square.main) {
        formattedData.push(<MainSquare
          key={`mainSquare${counter}__${group}`}
          size={square.s}
          columnStart={square.column}
          rowStart={square.row}
          ref={(e) => cRef(e, group, numPreviousGroups + i, squareGroups, squareContainers)}
          color={square.c}
          kanjiIndex={numPreviousGroups + i}
        />);
      }
      else {
        formattedData.push(<Square
          key={`square${counter}__${group}`}
          size={square.s}
          columnStart={square.column}
          rowStart={square.row}
          ref={(e) => cRef(e, group, numPreviousGroups + i, squareGroups, squareContainers)}
          color={square.c}
        />);
      }
    });
  }
  return formattedData;
};
