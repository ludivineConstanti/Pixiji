// == Import npm
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// == Import
import SProgressSquare from './SProgressSquare';

const ProgressSquare = ({ squareNum, currentQuestion }) => {
  const [vProgressSquare, setVProgressSquare] = useState({
    initial: { scale: 0, margin: 0 },
    animate: { scale: 1, margin: '4px 16px' },
  });

  // animate when the question number changes
  useEffect(() => {
    if (squareNum === currentQuestion) {
      setVProgressSquare({ ...vProgressSquare, animate: { ...vProgressSquare.animate, scale: 2 } });
    }
    else if (squareNum === currentQuestion - 1) {
      setVProgressSquare({ ...vProgressSquare, animate: { ...vProgressSquare.animate, scale: 1 } });
    }
  }, [currentQuestion]);

  return (
    <SProgressSquare
      s={{ isDone: squareNum <= currentQuestion }}
      variants={vProgressSquare}
      initial="initial"
      animate="animate"
      exit="initial"
    />
  );
};

ProgressSquare.propTypes = {
  squareNum: PropTypes.number.isRequired,
  currentQuestion: PropTypes.number.isRequired,
};

// == Export
export default ProgressSquare;
