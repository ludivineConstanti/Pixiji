// == Import npm
import React from 'react';
// import PropTypes from 'prop-types';

// == Import
import './style.scss';

const MoonRabbitPlanet = () => {
  const classMain = 'moonRabbitPlanet';
  const classSquare = 'square';
  const classSize = `${classSquare} ${classSquare}--size`;

  const classGroup = 'group';
  const classColumn = 'columnStart';
  const classRow = 'rowStart';
  return (
    <div className={classMain}>
      <div className={`${classSize}2 ${classColumn}3 ${classRow}3`} style={{ backgroundColor: '#B6E7FF' }} />
    </div>
  );
};

// == Export
export default MoonRabbitPlanet;
