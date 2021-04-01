// == Import npm
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { gsap, TimelineLite } from 'gsap';

// == Import
import '../style.scss';
import './style.scss';

const MainSquare = React.forwardRef(({
  size, columnStart, rowStart, color, kanjiIndex, rightAnswers,
}, ref) => {
  // cC for classComponent
  const cC = 'mainSquare';
  const cC2 = 'square';

  const tl = new TimelineLite({ paused: true });

  const componentRef = useRef(null);

  const [kanji, setKanji] = useState('');

  useEffect(() => {
    if (!kanji && rightAnswers[kanjiIndex]) setKanji(rightAnswers[kanjiIndex].answer.kanji);
  }, [rightAnswers]);

  return (
    <div
      className={`${cC} ${cC2} ${cC2}--size${size} ${cC2}--columnStart${columnStart} ${cC2}--rowStart${rowStart}`}
      style={{ backgroundColor: `${color}` }}
      ref={(e) => {
        // uses the function given by the parent to give references to it
        ref(e);
        // create local reference
        componentRef.current = e;
      }}
      onMouseOver={() => {
        // takes the width of the div, in px, and converts it in vw
        // eslint-disable-next-line max-len
        const componentWidth = componentRef.current.clientWidth / document.documentElement.clientWidth * 100;
        const componentNewSize = 8.8;
        const componentOffset = (componentWidth - componentNewSize) / 2;
        if (kanji !== '') {
          tl.to(componentRef.current, 0.35, {
            // needs to have a higher z-index than the rest (current highest is 2)
            ease: 'power1.inOut', zIndex: 10, y: `${componentOffset}vw`, x: `${componentOffset}vw`, height: `${componentNewSize}vw`, width: `${componentNewSize}vw`, fontSize: '2vw',
          }).play();
        }
      }}
      onMouseLeave={() => {
        if (kanji !== '') {
          tl.to(componentRef.current, 0.35, { ease: 'power1.inOut', scale: 1 }).play();
        }
      }}
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
