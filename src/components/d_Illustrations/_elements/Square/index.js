// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import '../style.scss';

const Square = React.forwardRef(({
  size, columnStart, rowStart, color,
}, ref) => {
  // cC for classComponent
  const cC = 'square';
  return (
    <div
      className={`${cC} ${cC}--size${size} ${cC}--columnStart${columnStart} ${cC}--rowStart${rowStart}`}
      style={{ backgroundColor: `${color}` }}
      ref={ref}
    />
  );
});

Square.propTypes = {
  size: PropTypes.number.isRequired,
  columnStart: PropTypes.number.isRequired,
  rowStart: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

// == Export
export default Square;
