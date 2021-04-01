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

  // takes the width of the div, in px, and converts it in vw
  const componentWidth = componentRef.current.clientWidth / document.documentElement.clientWidth * 100;

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
        const componentNewSize = 8.8;
        const componentOffset = (componentWidth - componentNewSize) / 2;
        if (kanji !== '') {
          tl.to(componentRef.current, 0.35, {
            // 1.1vw (current square unit need to chack in css * 8) => 8.8
            // needs to have a higher z-index than the rest (current highest is 2)
            // since the scale is messing up all the sizes
            // need to divide by componentScale to have consistent ones
            // Needed to use scale to have the div growing from the center
            // could also use height and width and then modify the y and x position
            // but would need to put different settings for the different div sizes
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
