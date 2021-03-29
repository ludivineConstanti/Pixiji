// == Import npm
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import
import '../style.scss';
import './style.scss';

const MainSquare = React.forwardRef(({
  size, columnStart, rowStart, color, kanjiIndex, rightAnswers,
}, ref) => {
  // cC for classComponent
  const cC = 'mainSquare';
  const cC2 = 'square';

  const [kanji, setKanji] = useState('');

  useEffect(() => {
    if (!kanji && rightAnswers[kanjiIndex]) setKanji(rightAnswers[kanjiIndex].answer.kanji);
  }, [rightAnswers]);

  return (
    <div
      className={`${cC} ${cC2} ${cC2}--size${size} ${cC2}--columnStart${columnStart} ${cC2}--rowStart${rowStart}`}
      style={{ backgroundColor: `${color}` }}
      ref={ref}
    >
      {kanji}
    </div>
  );
});

MainSquare.propTypes = {
  size: PropTypes.number.isRequired,
  columnStart: PropTypes.number.isRequired,
  rowStart: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  kanjiIndex: PropTypes.number.isRequired,
  rightAnswers: PropTypes.array.isRequired,
};

// == Export
export default MainSquare;
